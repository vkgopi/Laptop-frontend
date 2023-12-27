import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../user-info';
import { UserInfoService } from '../user-info.service';
import { OrderService } from '../order.service';
import { LaptopInfoService } from '../laptop-info.service';
import { LaptopInfo } from '../laptop-info';
import { Order } from '../order';

@Component({
  selector: 'app-user-recipt',
  templateUrl: './user-recipt.component.html',
  styleUrls: ['./user-recipt.component.css']
})
export class UserReciptComponent implements OnInit {

  id!:number;
  userEmail!:string;
  laptopId!:number;
  paymentMethod!:string;
  cardNumber!:number;
  cardownerName!:string;
  bankName!:string;
  branch!:string;
  gPayUserName!:string;
  gPayUpi!:string;
  

  constructor(private router:Router,
    private route:ActivatedRoute,
    private OrderService:OrderService,
    private laptopInfoService:LaptopInfoService,
    private userInfoService:UserInfoService){}

  userInfo:UserInfo=new UserInfo();
  laptop:LaptopInfo=new LaptopInfo();
  order:Order=new Order();

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.OrderService.getLaptopById(this.id).subscribe(data=>
      {
        console.log("---------------------------------------------------");
        console.log(data);
        this.order=data;
        this.paymentMethod=this.order.paymentMethod;
        this.cardNumber=this.order.CardNumber;
        this.cardownerName=this.order.cardownerName;
        this.bankName=this.order.bankName;
        this.branch=this.order.bankBranch;
        this.gPayUserName=this.order.googlePayUserName;
        this.gPayUpi=this.order.upi;

         this.laptopInfoService.getLaptopById(this.order.laptopId).subscribe(data=>
          {
            console.log(data);
            this.laptop=data;
          },
          (error:any)=>console.log(error));
         this.userInfoService.getProfileByEmail(this.order.userEmail).subscribe(data=>
          {
            this.userInfo=data;
          },
          (error:any)=>console.log(error));

      },
      (error:any)=>console.log(error));
      console.log("--------------------------------");
      console.log("id is produc id is"+this.order.laptopId);

   
   
  }

  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }
  goToGetProductById()
  {
    this.router.navigate(['/myPurchasesInfo',this.order.laptopId]);
  }

}