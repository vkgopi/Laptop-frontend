import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit{

  laptopInfo!:LaptopInfo;
  laptopList!:LaptopInfo[];
  laptopId!:number[];

  constructor( private router:Router,
  
    private laptopService:LaptopInfoService){}
  ngOnInit(): void {
    this.laptopService.getAllLaptopId().subscribe(data=>
      {
        console.log(data);
        this.laptopService.getAllLaptopByLaptopId().subscribe(data1=>
          {
            this.laptopList=data1
            console.log(data1);
          },
          (error:any)=>console.log(error));
      },
      (error:any)=>console.log(error));
      // this.buyProductService.getAllProductId().subscribe(data1=>
        
      //   {
      //     console.log(data1);
      //     this.productId=data1;
    
      //   });
        // for(let i=0;i<(this.productId.length);i++)
        // {
        //   this.productService.getProductById(this.productId[i]).subscribe(data=>
        //     {
        //         this.productList.push(data)
        //     },
        //     (error:any)=>console.log(error));
        // }
  }

  goToDeliveryInfo(id:number)
  {
      this.router.navigate(['/deliveryInfo',id]);
  }
}
