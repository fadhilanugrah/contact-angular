import { Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const routes: Routes = [
	{
		path: '',
		component: WelcomePageComponent
	},
	{
		path: 'addContact',
		component: AddContactComponent
	},
	{
		path: 'viewContact/:id',
		component: ViewContactComponent
	},
	{
		path: 'orderTable/:customer',
		component: OrderTableComponent
	}
];