import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit 
{
  orderList!:Order[];
  email!:string;
  constructor(private orderService:OrderService,
   private router:Router,
   private data:DataService){}


    ngOnInit(): void {
      this.data.currentValue.subscribe(message=>
        {
          this.email=message;
        });
      this.orderService.getAllOrderByUserEmail(this.email).subscribe(data=>
        {
          console.log(data);
          if(data.length==0)
          {
              this.router.navigate(['/OrderEmpty']);
          }
          else{
          this.orderList=data;
          }
        });
      
    }
    
    search(laptopName:string)
    {
        this.router.navigate(['/search2',laptopName]);
    }
    goToOrderInfo(id:number,id1:number)
    {
      this.router.navigate(['/OrderInfo',id]);
      this.data.getId(id1);
    }
}