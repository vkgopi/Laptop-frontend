import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { LaptopInfo } from '../laptop-info';
import { Order } from '../order';
import { LaptopInfoService } from '../laptop-info.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  submit=false;
  id!:number;
  email:string="";
  subscription!:Subscription;
imgUrl!:string;
price!:number;
laptopName!:string;
laptop!:LaptopInfo;
order:Order=new Order();

  constructor(private router:Router,
    private route:ActivatedRoute,
    private laptopService:LaptopInfoService,
    private orderService:OrderService,
    private data:DataService,
    private curDate:DatePipe){}

    currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");
    currentMonth:any=this.curDate.transform(new Date(),"MM");
    currentYear:any=this.curDate.transform(new Date(),"yyyy");
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
    
  search(laptopName:string)
  {
      this.router.navigate(['/search2',this.laptopName]);
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
    this.order.paymentMethod="Debit Card";

    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe(data1=>
      {
        console.log(data1);
        // this.data.getInvoice(data1);
        this.data.getPaymentMethod(this.order.paymentMethod);
        this.data.getId(this.order.laptopId);
        this.data.changeMessage(this.order.userEmail);
        this.data.getCardNumber(this.order.CardNumber);
        this.data.getCardOwnerName(this.order.cardownerName);
        this.data.getCurrentDate(this.order.date);
        console.log(this.order.id);
        console.log(this.order.paymentMethod);
        alert("Product Buyed Successfully");
        this.router.navigate(['/paymentConfirm']);
      },
      (error:any)=>console.log(error));

  }
  back()
  {
      this.router.navigate(['/paymentMethod',this.id]);
  }
}
