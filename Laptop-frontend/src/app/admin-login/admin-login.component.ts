import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  userName!:string;
  password!:string;
  status="";
  submit!:boolean;
 
   constructor(private router:Router){}
 
   OnSubmit()
   {
     if(this.userName=="admin123"&&this.password=="12345")
     {
       this.submit=true;
       alert("Login SuccessFull");
       this.router.navigate(['/adminHome']);
     }
     else
     {
       this.submit=false;
       this.status="Pleace Enter valid UserName and Password";
       alert("Login Failed");
       this.router.navigate(['/adminLogin']);
     }
     
   }
 
   goToHome()
   {
 
     this.router.navigate(['/home']);
   }
 
 }
 