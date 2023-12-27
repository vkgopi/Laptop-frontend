import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaptopInfo } from '../laptop-info';
import { LaptopInfoService } from '../laptop-info.service';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

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
    
    this.router.navigate(['/register']);
  }

  serch(laptopName:string)
  {
    this.router.navigate(['/home']).then(()=>
    {
      this.router.navigate(['/search1',laptopName]);
     });
     
  }

}
