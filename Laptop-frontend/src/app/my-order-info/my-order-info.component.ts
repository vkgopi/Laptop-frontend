import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { LaptopInfo } from '../laptop-info';
import { Subscription } from 'rxjs';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-my-order-info',
  templateUrl: './my-order-info.component.html',
  styleUrls: ['./my-order-info.component.css']
})
export class MyOrderInfoComponent implements OnInit{

  laptop!:LaptopInfo;
  id!:number;
  orderId!:number;
  subscription!:Subscription;
  constructor(private router:Router,
    private laptopservice:LaptopInfoService,
    private route:ActivatedRoute,
    private data:DataService,
    private orderService:OrderService){}
  
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.laptop=new LaptopInfo();
      console.log(this.id);
      this.subscription=this.data.currentId.subscribe(message=>
        {this.orderId=message});
        this.laptopservice.getLaptopById(this.id).subscribe(data=>
          {
            console.log(data);
            this.laptop=data;
          },
          (error:any)=>console.log(error));
    }
    goToHome2()
  {
    this.router.navigate(['/order']);
  }
  
  deleteLaptop()
  {   
    this.orderService.deleteLaptopById(this.orderId).subscribe((data)=>
    {
  
      console.log(data);
    })
    alert("Order Canceled");
    this.router.navigate(['/order']);
  
  }
  
  goToUserRecipt()
  {
    this.router.navigate(['/userRecipt',this.orderId]);
  }
  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }
  }
  