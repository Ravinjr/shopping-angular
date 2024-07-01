import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='https://fakestoreapi.com/';
  constructor(private http:HttpClient) { }

  getAllProductsWithLimit(limit:number=5):Observable<productRepresentation[]>{
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    
    return this.http.get<Array<productRepresentation>>(productsUrl);
  }

  crateProduct(product:productRepresentation){
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<productRepresentation>(productsUrl,product);
    
  }
}
