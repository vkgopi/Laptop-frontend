import { Component, OnInit } from '@angular/core';
import { LaptopInfoService } from '../laptop-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopInfo } from '../laptop-info';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent implements OnInit{

  submit=false;
  laptopInfo!:LaptopInfo;
  id!:number;
  constructor(private laptopService:LaptopInfoService,
    private route:ActivatedRoute,
    private router:Router){}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.laptopInfo=new LaptopInfo();
    console.log(this.id);
    this.laptopService.getLaptopById(this.id).subscribe(data=>
      {
        this.laptopInfo=data;
        console.log(data);
      },
      (error:any)=>console.log(error));
    
  }
  OnSubmit(id:number)
  {
    id=this.id;
      this.laptopService.updateLaptopById(this.id,this.laptopInfo).subscribe(data=>{
        console.log(data);
        alert("Product Updated");
        this.router.navigate(['/adminGetLaptopById',id]);
      },
      (error:any)=>console.log(error));
  }
  goToAdminHome()
  {
    this.router.navigate(['/adminGetLaptopById',this.id]);
  }
}
