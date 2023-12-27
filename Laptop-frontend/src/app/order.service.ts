import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL="http://localhost:8080/buyLaptop";
  
  constructor(private httpClient:HttpClient) { }

  addOrder(order:Order):
  Observable<Order>
  {
    return this.httpClient.post<Order>(`${this.baseURL}/${"add"}`,order);
  }

  getAllOrderByUserEmail(userEmail:string):
  Observable<Order[]>
  {
    return this.httpClient.get<Order[]>(`${this.baseURL}/${"getAllByEmail"}/${userEmail}`);
  }

  getAllLaptopId():
  Observable<number[]>
  {
    return this.httpClient.get<number[]>(`${this.baseURL}`);
  }

  deleteLaptopById(id:number):
  Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getLaptopById(id:number):
  Observable<Order>
  {
    return this.httpClient.get<Order>(`${this.baseURL}/${id}`);
  }
}