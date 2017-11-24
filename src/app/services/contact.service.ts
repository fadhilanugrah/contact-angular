import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from "../models/Contact"

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  public getContact(id): Observable<Contact>{
    let URI= 'http://localhost:3000/contacts/'+id;
    return this.http.get(URI)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public addContact(contact:Contact): Observable<Contact> {
  	let URI='http://localhost:3000/contacts';
  	let headers = new Headers;
  	let body = JSON.stringify({
  		first_name: contact.first_name,
  		last_name: contact.last_name,
  		phone: contact.phone,
  		email: contact.email,
  		address: contact.address,
      gender: contact.gender,
      company: contact.company,
      status: contact.status
  	});
  	console.log(body);
    headers.append('Access-Control-Allow-Origin','*');
  	headers.append('Content-Type', 'application/json');
  	return this.http
  		.post(URI, body, {headers: headers})
      .map(res =>res.json())
  		.catch(this.handleError);

  }

  private handleError (error: Response | any) {
  	console.error('ApiService::handleError', error);
  	return Observable.throw(error)
  }
}
