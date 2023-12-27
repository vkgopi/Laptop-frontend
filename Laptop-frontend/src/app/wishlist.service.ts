import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from './wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpClient:HttpClient) { }

  baseURL="http://localhost:8080/wishlist";

  addWishlist(wishlist:Wishlist):
  Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/${"add"}`,wishlist);
  }

  getAllWishlistByEmail(email:string):
  Observable<Wishlist[]>
  {
    return this.httpClient.get<Wishlist[]>(`${this.baseURL}/${"email"}/${email}`);
  }

  getWishlistById(id:number):
  Observable<Wishlist>
  {
    return this.httpClient.get<Wishlist>(`${this.baseURL}/${"id"}/${id}`);
  }

  deleteWishlistById(id:number):
  Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
