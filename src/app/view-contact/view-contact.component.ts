import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service'

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  private contact: Contact = '';
  constructor(private route: ActivatedRoute, private contactServ: ContactService) { }

  ngOnInit() {
  	this.loadContact();
  }

  public loadContact(){
  	var contact_id = this.route.snapshot.params.id
  	this.contactServ.getContact(contact_id).subscribe(
  			response => this.contact = {
  				first_name: response.data.first_name,
  				last_name: response.data.last_name,
  				phone: response.data.phone,
  				address: response.data.address,
  				email: response.data.email,
  				gender: response.data.gender,
  				company: response.data.company,
  				status: response.data.status
  			}
  			// res => console.log(res.data.first_name);
  		)
  }

}
