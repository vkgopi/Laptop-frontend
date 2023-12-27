import { Injectable } from '@angular/core';
import { UserEntity } from './user-entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  pathURL:string="http://localhost:8080/user";
  constructor(private httpClient:HttpClient) { }

  addUser(user:UserEntity)://userEntity is input type
  Observable<object>//object is return type
  {   
    return this.httpClient.post(`${this.pathURL}/${"add"}`,user);
  }

  login(userName:string,userPassword:string):
  Observable<object>
  {
    return this.httpClient.get(`${this.pathURL}/${userName}/${userPassword}`);
  }
  getUserById(userName:String):
  Observable<UserEntity>
  {
    return this.httpClient.get<UserEntity>(`${this.pathURL}/${userName}`)
  }

  getUserByEmail(email:string):
  Observable<UserEntity>
  {
    return this.httpClient.get<UserEntity>(`${this.pathURL}/${"email"}/${email}`);
  }

  updatePassword(email:string,user:UserEntity):
  Observable<Object>
  {
    return this.httpClient.post(`${this.pathURL}/${"forgetPassword"}/${email}`,user);
  }
}
