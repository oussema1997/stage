import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/FrontOffice/Models/api.response' ;
import { product } from '../Models/products.Model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService  {
  url="http://localhost:9080/api";
  
   
 
  constructor(private http:HttpClient) { }


  getProduct(id:number): Observable<any>{
    return this.http.get<any>(this.url+`/getProductById/${id}`);
  }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.url+"/getAllProducts");
  }

  addProduct(p:product):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.url+"/addProducts", p);
  }

  updateProduct(id:number, p:product):Observable<ApiResponse>{
     return this.http.put<ApiResponse>(this.url+`/UpdateProdById/${id}`, p);
  }

  deleteProduct(id:number):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.url+`/delProduct/${id}`);
  }
}
