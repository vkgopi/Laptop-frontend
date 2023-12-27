import { Component, OnInit } from '@angular/core';
import { LaptopInfo } from '../laptop-info';
import { Router } from '@angular/router';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit
{
  laptopList!:LaptopInfo[];
  // product!:ProductInfo[];
  constructor(private router:Router,
    private laptopService:LaptopInfoService){}

  ngOnInit(): void {
    this.laptopService.getAllLaptop().subscribe(data=>{
      this.laptopList=data;
    },
    (error:any)=>console.log(error));
  }
  goToLaptop()
  {
    this.router.navigate(['/product']);
  }
 

  getLaptopById(id:number)
  {
      this.router.navigate(['/adminGetProductById',id]);
  }

  search(laptopName:string)
  {
    this.router.navigate(['/adminSearch',laptopName]);
  }
}
