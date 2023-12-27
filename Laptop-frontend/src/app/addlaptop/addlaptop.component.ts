import { Component } from '@angular/core';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlaptop',
  templateUrl: './addlaptop.component.html',
  styleUrls: ['./addlaptop.component.css']
})
export class AddlaptopComponent {
  laptopinfo:LaptopInfo=new LaptopInfo();
  constructor(private laptopInfoService:LaptopInfoService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveProduct()
  {
    this.laptopInfoService['addLaptop'](this.laptopinfo).subscribe((data: any)=>
    {
      console.log(data);
      alert("Product added Successfully");
      this.goToLaptopList();
     
    },
    (error:any)=>console.log(error)
    );
  }
  goToLaptopList()
  {
    this.router.navigate(['/products']);
  }
  onSubmit()
  {
    console.log(this.laptopinfo);
    this.saveProduct();
  }
 }

