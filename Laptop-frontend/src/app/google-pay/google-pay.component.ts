import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { LaptopInfoService } from '../laptop-info.service';
import { Order } from '../order';
import { LaptopInfo } from '../laptop-info';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.css']
})
export class GooglePayComponent implements OnInit{

  constructor(private router:Router,
    private orderService:OrderService,
    private data:DataService,
    private laptopService:LaptopInfoService,
    private route:ActivatedRoute,
    private curDate:DatePipe){}

    submit=false;
    subscription!:Subscription;
    email:string="";
    imgUrl!:string;
    id!:number;
    laptopName!:string;
    price!:number;
    order:Order=new Order();
    laptop:LaptopInfo=new LaptopInfo();
    currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");

    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.laptop=new LaptopInfo();
      console.log(this.id);
      this.laptopService.getLaptopById(this.id).subscribe((data:LaptopInfo)=>
        {
          console.log(data);
          this.laptop = data;
          this.imgUrl=this.laptop.LaptopImg;
          this.price=this.laptop.price;
          this.laptopName=this.laptop.laptopName;
        });
    }

  OnSubmit()
  {
    
    this.subscription=this.data.currentValue.subscribe(message=>
      {
          this.email=message;
      });
    this.order.imgUrl=this.imgUrl;
    this.order.laptopId=this.id;
    this.order.laptopName=this.laptopName;
    this.order.price=this.price;
    this.order.userEmail=this.email;
    this.order.date=this.currentDate;
    this.order.paymentMethod="GooglePay";

    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe(data1=>
      {
        console.log(data1);
        // this.data.getInvoice(data1);
        this.data.getPaymentMethod(this.order.paymentMethod);
        this.data.getId(this.order.laptopId);
        this.data.changeMessage(this.order.userEmail);
    
        this.data.getCardOwnerName(this.order.googlePayUserName);
        this.data.getBankName(this.order.upi);
        this.data.getCurrentDate(this.order.date);

        console.log(this.order.id);
        console.log(this.order.paymentMethod);
        alert("Product Buyed Successfully");
        this.router.navigate(['/paymentConfirm']);
      },
      (error:any)=>console.log(error));

  }


  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
  back()
  {
      this.router.navigate(['/paymentMethod',this.id]);
  }
}
