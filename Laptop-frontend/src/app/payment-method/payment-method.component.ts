import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { LaptopInfoService } from '../laptop-info.service';
import { LaptopInfo } from '../laptop-info';
import { Order } from '../order';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit{

  id!:number;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private orderService:OrderService,
    private data:DataService,
    private laptopService:LaptopInfoService,
    private curDate:DatePipe){}

    laptop!:LaptopInfo;
    order:Order=new Order();
    subscription!:Subscription;
    email!:string;
    imgUrl!:string;
    laptopName!:string;
    price!:number;
     currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");
    
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.laptop=new LaptopInfo();
    console.log(this.id);
    console.log("current date "+this.currentDate)
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
    this.order.paymentMethod="CaseOn Delivery";

    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe(data1=>
      {
        console.log(data1);
        // this.data.getInvoice(data1);
        this.data.getPaymentMethod(this.order.paymentMethod);
        this.data.getId(this.order.laptopId);
        this.data.changeMessage(this.order.userEmail);
       
        console.log(this.order.id);
        console.log(this.order.paymentMethod);
        alert("Product Buyed Successfully");
        this.router.navigate(['/paymentConfirm']);
      },
      (error:any)=>console.log(error));
  }
  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }

  goToPayment()
  {
    this.router.navigate(['/payment',this.id]);
  }
  goToBankPayment()
  {
    this.router.navigate(['/bankPayment',this.id]);
  }
  goToGooglePay()
  {
    this.router.navigate(['/googlePay',this.id]);
  }
  back()
  {
    this.router.navigate(['/getLaptopById',this.id]);
  }
}

