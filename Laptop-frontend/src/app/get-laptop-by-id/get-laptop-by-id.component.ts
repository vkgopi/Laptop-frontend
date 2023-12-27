import { Component, OnInit } from '@angular/core';
import { LaptopInfo } from '../laptop-info';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Wishlist } from '../wishlist';
import { LaptopInfoService } from '../laptop-info.service';
import { WishlistService } from '../wishlist.service';

declare var Razorpay:any;
@Component({
  selector: 'app-get-laptop-by-id',
  templateUrl: './get-laptop-by-id.component.html',
  styleUrls: ['./get-laptop-by-id.component.css']
})
export class GetLaptopByIdComponent implements OnInit{

  laptop!:LaptopInfo;
  email:string="";
  subscription!:Subscription;
  imgUrl!:string;
  price!:number;
  laptopName!:string;

  buy!:Wishlist;

  id!:number;

  constructor(private route:ActivatedRoute,
    private data:DataService,
    private laptopService:LaptopInfoService,
    private router:Router,
    private wishlistService:WishlistService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.laptop=new LaptopInfo();
    console.log(this.id);
    this.laptopService.getLaptopById(this.id).subscribe((data:LaptopInfo)=>
      {
        console.log(data);
        this.laptop = data;
        this.imgUrl=this.laptop.LaptopImg;
        this.price=this.laptop.price;
        this.laptopName=this.laptop.laptopName;
      });
  }

  onSubmit(id:number)
  {
    const RazorpayOptions={
      description:'Sample Razorpay demo',
      currency:'INR',
      amount:this.laptop.price*100,
      name:'Prathyusha',
      key:'rzp_test_wypPGboA0ryRGO',
      image:'https://w7.pngwing.com/pngs/596/349/png-transparent-india-independence-day-indian-flag.png',
      prefills:{
        name:'Mani',
        email:'mani@gmail.com',
        phone:'1472583694'
      },
      theme:{
        color:'#f37254'
      },
      modal:{
        ondismiss:()=>{
          console.log('dismissed')
        }
      }
    }
    const successCallback= (paymentid:any)=>{
      console.log(paymentid);
    }
    const failureCallback=(e:any)=>{
      console.log(e);
    }
    Razorpay.open(RazorpayOptions,successCallback,failureCallback)
    };
    //this.router.navigate(['/paymentMethod',id]);
    
    // this.buy=new BuyProduct();
    // this.subscription=this.data.currentValue.subscribe(message=>
    //   {this.email=message});
      

    //   this.buy.userEmail=this.email;
    //   this.buy.productId=this.id;
    //   this.buy.productName=this.productName;
    //   this.buy.imgUrl=this.imgUrl;
    //   this.buy.price=this.price;
      
    //  this.buyProductService.addBuyProduct(this.buy).subscribe(data=>
    //   {
    //     console.log(data);
    //     alert("Product Buyed successFully");
    //     this.router.navigate(['/myPurchases']);
    //   },
    //   (error)=>console.log(error));
  

  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }
  addFavourite()
  {
    this.buy=new Wishlist();
    this.subscription=this.data.currentValue.subscribe(message=>
      {this.email=message});
      

      this.buy.userEmail=this.email;
      this.buy.laptopId=this.id;
      this.buy.laptopName=this.laptopName;
      this.buy.imgUrl=this.imgUrl;
      this.buy.price=this.price;
      this.wishlistService.addWishlist(this.buy).subscribe(data=>
        {
          console.log(data);
          alert("Product Added Successfully");
          this.router.navigate(['/wishlist']);
        })
    
  }
  goToHome2()
  {
    this.router.navigate(['/home2']);
  }
}
