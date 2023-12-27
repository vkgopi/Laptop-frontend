import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaptopInfo } from './laptop-info';

@Injectable({
  providedIn: 'root'
})
export class LaptopInfoService {

  constructor(private httpClient:HttpClient) { }

  baseURL="http://localhost:8080/laptop";

  addLaptop(laptop:LaptopInfo):
  Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}/${"add"}`,laptop);
  }

  getAllLaptop():
  Observable<LaptopInfo[]>
  {
    return this.httpClient.get<LaptopInfo[]>(`${this.baseURL}/${"get"}`);
  }

  getLaptopById(id:number):
  Observable<LaptopInfo>
  {
    return this.httpClient.get<LaptopInfo>(`${this.baseURL}/${id}`);
  }

  getAllLaptopId():
  Observable<number[]>
  {
    return this.httpClient.get<number[]>(`${this.baseURL}/${"getAllProductId"}`);
  }

  getAllLaptopByLaptopId():
  Observable<LaptopInfo[]>
  {
    return this.httpClient.get<LaptopInfo[]>(`${this.baseURL}/${"getAllProductById"}`);
  }

  deleteLaptopById(id:number):
  Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  updateLaptopById(id:number,laptop:LaptopInfo):
  Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,laptop);
  }

  getAllLaptopBySearch(laptopName:string):
  Observable<LaptopInfo[]>
  {
    return this.httpClient.get<LaptopInfo[]>(`${this.baseURL}/${"search"}/${laptopName}`);
  }
}
