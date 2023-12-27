import { Component, OnInit } from '@angular/core';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-laptop',
  templateUrl: './get-laptop.component.html',
  styleUrls: ['./get-laptop.component.css']
})
export class GetLaptopComponent implements OnInit{
  
  laptopList!:LaptopInfo[];
  constructor(private laptopService:LaptopInfoService,private router:Router){}
  ngOnInit(): void {
  this.getAllLaptops();
  }

  getAllLaptops()
  {
    this.laptopService.getAllLaptop().subscribe(data=>{
      this.laptopList=data;
    },
    (error:any)=>console.log(error));
  }

  getLaptopById(id:number)
  {
      this.router.navigate(['/getLaptopById',id]);
  }

}