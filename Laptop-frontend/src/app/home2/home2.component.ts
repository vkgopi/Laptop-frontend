import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {

  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }
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
  getLaptopById(id:number)
  {
      this.router.navigate(['/getProductById',id]);
  }
}