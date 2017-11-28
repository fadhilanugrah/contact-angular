import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routing'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import {ContactService} from './services/contact.service';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { OrderTableComponent } from './order-table/order-table.component'

import { OrderService } from './services/order.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ViewContactComponent,
    OrderTableComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ ContactService, OrderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
