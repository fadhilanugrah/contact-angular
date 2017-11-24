import { Component, OnInit, NgModule } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  private newContact: Contact;
  constructor(private contactServ: ContactService) { }

  ngOnInit() {
  	this.newContact = {
  		first_name:'',
  		last_name:'',
  		phone:'',
  		email:'',
  		address:'',
      gender:  '',
      company:  '',
      status :  ''
  	}
  }

  public onSubmit() {
  	this.contactServ.addContact(this.newContact).subscribe({ 	
      response => {
         if(response.success == true)
           console.log(response);
      }
  	});
  }
}
