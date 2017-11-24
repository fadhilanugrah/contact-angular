import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routing'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import {ContactService} from './services/contact.service';
import { ViewContactComponent } from './view-contact/view-contact.component'


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
