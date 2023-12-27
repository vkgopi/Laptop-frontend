import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-laptop-info',
  templateUrl: './laptop-info.component.html',
  styleUrls: ['./laptop-info.component.css']
})
export class LaptopInfoComponent implements OnInit
{
    laptopInfo:LaptopInfo=new LaptopInfo();
  submit=false;
 // image:string="";  
  imgUrl:string="../../assets/profile/profileIcon1.png";
    
  
    constructor(private router:Router,private laptopService:LaptopInfoService){}
  ngOnInit(): void {
  
  }

    OnSubmit()
    {
      console.log(this.laptopInfo);
      this.laptopService.addLaptop(this.laptopInfo).subscribe(data=>
        {
          console.log(data);
          alert("product added");
          this.goToAdminHome();
        },
      (error)=>console.log(error));
    }

    goToAdminHome()
    {
      this.router.navigate(['/adminHome']);
    }
    getUrl()
    {
      this.imgUrl=this.laptopInfo.LaptopImg;
    }

}
