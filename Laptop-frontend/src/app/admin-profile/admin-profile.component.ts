import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminInfo } from '../admin-info';
import { AdminInfoService } from '../admin-info.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit 
{
  userInfo!:AdminInfo;
  id!:number;
  constructor(private router:Router,
    private adminService:AdminInfoService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   this.userInfo=new AdminInfo();
    console.log(this.id);
    this.adminService.getAdminInfoById(this.id).subscribe(data=>
      {
        console.log(data);
        this.userInfo=data;
      },
      (error:any)=>console.log(error));
  }
  OnSubmit()
  {
      this.adminService.updateAdminInfo(this.userInfo).subscribe(data=>
        {
          console.log(data);
          alert("Profile Updated SuccessFully");
          this.router.navigate(['/adminGetProfile']);
        },
        (error:any)=>console.log(error));
  }
  goToAdminGetProfile()
  {
    this.router.navigate(['/adminGetProfile']);
  }

}