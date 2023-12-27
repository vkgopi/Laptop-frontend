import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit{

  id!:number;
  laptop!:LaptopInfo;
  userInfo!:UserInfo[];


  constructor(private route:ActivatedRoute,
    private router:Router,
    private laptopService:LaptopInfoService,
    private UserInfo:UserInfo){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.laptop=new LaptopInfo();
    console.log(this.id);

    this.laptopService.getLaptopById(this.id).subscribe(data=>
      {
        console.log(data);
        this.laptop=data;
          this.UserInfo.getAllProfileByLaptopId(this.id).subscribe((data1: UserInfo[])=>
            {
              console.log(data1);
              this.userInfo=data1;
            },
            (error:any)=>console.log(error));
      },
      (error:any)=>console.log(error));
  }
}
