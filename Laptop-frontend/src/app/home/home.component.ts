import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  search:string="";
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

  getLaptopById()
  {
    alert("pleace Login")
      this.router.navigate(['/login']);
  }

  serch(laptopName:string)
  {
    
    this.router.navigate(['/search1',laptopName]);
  }
}
