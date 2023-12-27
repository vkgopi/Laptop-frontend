import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-admin-get-laptop-by-id',
  templateUrl: './admin-get-laptop-by-id.component.html',
  styleUrls: ['./admin-get-laptop-by-id.component.css']
})
export class AdminGetLaptopByIDComponent implements OnInit{

  id!:number;
  laptop!:LaptopInfo;

constructor(private route:ActivatedRoute,
  private router:Router,
  private laptopService:LaptopInfoService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.laptop=new LaptopInfo();
    console.log(this.id);
    this.laptopService.getLaptopById(this.id).subscribe(data=>
      {
        this.laptop=data;
      },
      (error:any)=>console.log(error));
    
  }
  goToHome2()
  {
    this.router.navigate(['/adminHome']);
  }

  onSubmit(id:number)
  {
    this.laptopService.deleteLaptopById(id).subscribe(data=>
      {
        console.log(data);
        
      });
      alert("product Deleted Successfully");
        this.router.navigate(['/adminHome']);
  }
  goToLaptopUpdate(id:number)
  {
    this.router.navigate(['/updateProduct',id]);
  }
}
