import { Orders } from './orders';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
 url="http://localhost:8080/api"

constructor( private http:HttpClient) { }

  getAll():Observable<Orders[]>{
   return this.http.get<Orders[]>(this.url);
  }

  saveProduct(orders):Observable<Orders>{
    return this.http.post<Orders>(this.url,orders);
  }

}
