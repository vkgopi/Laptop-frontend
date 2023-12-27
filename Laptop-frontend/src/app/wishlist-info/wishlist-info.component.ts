import { Component } from '@angular/core';
import { LaptopInfo } from '../laptop-info';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LaptopInfoService } from '../laptop-info.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist-info',
  templateUrl: './wishlist-info.component.html',
  styleUrls: ['./wishlist-info.component.css']
})
export class WishlistInfoComponent {
  laptop!:LaptopInfo;
  id!:number;
  orderId!:number;
  subscription!:Subscription;
  constructor(private router:Router,
    private laptopService:LaptopInfoService,
    private route:ActivatedRoute,
    private data:DataService,
    private wishlistService:WishlistService){}
  
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.laptop=new LaptopInfo();
      console.log(this.id);
      this.laptopService.getLaptopById(this.id).subscribe(data=>
        {
          console.log(data);
          this.laptop=data;
        },
        (error:any)=>console.log(error));
    }
    goToHome2()
  {
    this.router.navigate(['/favourite']);
  }
  
  deleteLaptop()
  { this.subscription=this.data.currentId.subscribe(message=>
    {this.orderId=message});
    
    this.wishlistService.deleteWishlistById(this.orderId).subscribe((data)=>
    {
  
      console.log(data);
    })
    alert("Product Removed");
    this.router.navigate(['/myPurchases']);
  
  }
  buy(id:number)
  {
    this.router.navigate(['/paymentMethod',id]);
  }
  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }
}
