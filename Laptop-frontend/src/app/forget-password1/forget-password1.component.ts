import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserEntity } from '../user-entity';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-forget-password1',
  templateUrl: './forget-password1.component.html',
  styleUrls: ['./forget-password1.component.css']
})
export class ForgetPassword1Component implements OnInit{

  user:UserEntity=new UserEntity();
  submit=false;
  userEmail!:string;
  password!:string;
  password1!:string;

  constructor(private data:DataService,
    private userService:UserServiceService,
    private router:Router){}
    
  ngOnInit(): void {
    this.data.currentValue.subscribe(message=>
      {
        this.userEmail=message;

        this.userService.getUserByEmail(this.userEmail).subscribe(data=>
          {
            this.user=data;
          },
          (error:any)=>console.log(error));
      });
  }
  OnSubmit()
  {
    this.user.userPassword=this.password;

    if(this.password==this.password1)
    {
      this.userService.updatePassword(this.userEmail,this.user).subscribe(data=>
        {
          console.log(data);
          alert("Password Updated SuccessFully");
          this.router.navigate(['/login']);
        },
        (error:any)=>console.log(error));
    } 
  }
  back()
  {
    this.router.navigate(['/forgetPassword']);
  }
}
