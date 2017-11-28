import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  private orders: Order[] = [];

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
  	this.loadOrder();
  }

  private loadOrder() {
  	var customer = this.route.snapshot.params.customer;
  	this.orderService.getOrderByCustomer(customer).subscribe(
  			response => {
  				this.orders = response;
  			}	
  		)
  }

  public rejectOrder(order: Order) {
  	order.status = 0;
  	this.orderService.updateOrder(order).subscribe(
  			response => console.log(response);
  		)
  }

  public continueOrder(order: Order){
  	order.status = order.status+1;
  	this.orderService.updateOrder(order).subscribe(
  			response => console.log(response);
  		)
  }

}
