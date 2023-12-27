import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { LaptopInfoService } from '../laptop-info.service';
import { OrderEmptyComponent } from '../order-empty/order-empty.component';
import { OrderService } from '../order.service';
import { LaptopInfo } from '../laptop-info';
import { Order } from '../order';

@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.css']
})
export class BankPaymentComponent implements OnInit{

  constructor(private router:Router,
    private laptopService:LaptopInfoService,
    private route:ActivatedRoute,
    private OrderService:OrderService,
    private data:DataService,
    private curDate:DatePipe){}

    submit=false;
    id!:number;
    imgUrl!:string;
    price!:number;
    laptopName!:string;
    email:string="";
    subscription!:Subscription;
    laptop:LaptopInfo=new LaptopInfo();
    order:Order=new Order();
    currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");

    ngOnInit(): void {
      
      this.id=this.route.snapshot.params['id'];
      this.laptop=new LaptopInfo();

      this.laptopService.getLaptopById(this.id).subscribe(data=>
        {
          this.laptop=data;
          this.imgUrl=this.laptop.LaptopImg;
          this.price=this.laptop.price;
          this.laptopName=this.laptop.laptopName;
        },
        (error:any)=>console.log(error));
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
      this.order.paymentMethod="Bank";
  
      console.log(this.order);
      this.OrderService.addOrder(this.order).subscribe(data1=>
        {
          console.log(data1);
          // this.data.getInvoice(data1);
          this.data.getPaymentMethod(this.order.paymentMethod);
          this.data.getId(this.order.laptopId);
          this.data.changeMessage(this.order.userEmail);
          this.data.getCardNumber(this.order.accountNumber);
          this.data.getCardOwnerName(this.order.accountHolderName);
          this.data.getBankName(this.order.bankName);
          this.data.getBranch(this.order.bankBranch);
          this.data.getCurrentDate(this.order.date);
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
  back()
  {
      this.router.navigate(['/paymentMethod',this.id]);
  }

}
