import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import {ContactService} from './services/contact.service'


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
