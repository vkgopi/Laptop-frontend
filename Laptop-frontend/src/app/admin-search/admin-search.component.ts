import { Component, OnInit } from '@angular/core';
import { LaptopInfo } from '../laptop-info';
import { Router, ActivatedRoute } from '@angular/router';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

  laptopList!:LaptopInfo[];
  laptopName!:string;

  constructor(private router:Router,
    private laptopService:LaptopInfoService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.laptopName=this.route.snapshot.params['name'];
  
    console.log(this.laptopName);
    this.laptopService.getAllLaptopBySearch(this.laptopName).subscribe(data=>
      {
        console.log(data);
        this.laptopList=data;
      },
    (error:any)=>console.log(error));
  }
  getLaptopById(id:number)
  {
    
    this.router.navigate(['/adminGetLaptopById',id]);
  }

  search(laptopName:string)
  {
    this.router.navigate(['/adminHome']).then(()=>
    {
      this.router.navigate(['/adminSearch',laptopName]);
     });
     
  }


}
