import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../user-entity';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit
{
userEmail!:string;
 password!:string;
 status="";
 submit!:boolean;
  
    constructor(private data:DataService,
      private userService:UserServiceService,
      private router:Router){}
    ngOnInit(): void 
    { 
    }
  
    OnSubmit()//login
    {
      {
        if(this.userEmail=="mani@gmail.com"&&this.password=="123456@A")
        {
          this.submit=true;
          alert("Login SuccessFull");
          this.router.navigate(['/home2']);
        }
        else
        {
          this.submit=false;
          this.status="Pleace Enter valid UserName and Password";
          alert("Login Failed");
          this.router.navigate(['/userLogin']);
        }
        
      }
    
        
    }
  
    goToHome()
    {
      this.router.navigate(['/home']);
    }
    goToRegister()
    {
      this.router.navigate(['/register']);
    }
    goToForgetPassword()
    {
      this.router.navigate(['/forgetPassword']);
    }
  
  }
  