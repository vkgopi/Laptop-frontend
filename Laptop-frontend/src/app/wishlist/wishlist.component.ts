import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Wishlist } from '../wishlist';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  email!:string;
    wishlistList!:Wishlist[];
    constructor(private router:Router,
      private data:DataService,
      private wishlistService:WishlistService){}
  
    ngOnInit(): void {
      this.data.currentValue.subscribe(message=>
        {
          this.email=message;
        });
      this.wishlistService.getAllWishlistByEmail(this.email).subscribe(data=>
        {
          console.log(data);
          if(data.length==0)
          {
              this.router.navigate(['/myPurchaseEmpty']);
          }
          else{
          this.wishlistList=data;
          }
        });
    }
    goToMyWishlistInfo(id:number,id1:number)
    {
      this.router.navigate(['/wishlistInfo',id]);
      this.data.getId(id1);
    }
    search(laptopName:string)
    {
        this.router.navigate(['/search2',laptopName]);
    }
  }
  