import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
 baseURL="";
  constructor(private httpClient:HttpClient) { }
}