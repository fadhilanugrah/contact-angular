import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from "../models/Order";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  public getOrderByCustomer(customer): Observable<Contact[]> {
  	let URI = 'https://localhost:3000/orders/'+customer;
  	return this.http.get(URI)
  		.map(res => res.json())
  		.map(res => <Order[]>res.data)
  		.catch(this.handleError);
  }

  public updateOrder(order: Order): Observable<Order> {
  	let URI = 'https://localhost:3000/orders/'+order.id;
  	let headers = new Headers;
  	let body = JSON.stringify(order);

  	console.log(body);

  	headers.append('Content-Type', 'application/json');

  	return this.http.put(URI, body, {headers: headers})
  	.map(res => res.json)
  }

  private handleError (error: Response | any) {
  	console.error('ApiService::handleError', error);
  	return Observable.throw(error)
  }

}
