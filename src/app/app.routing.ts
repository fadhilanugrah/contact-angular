import { Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/addContact',
		pathMatch: 'full'
	},
	{
		path: 'addContact',
		component: AddContactComponent
	},
	{
		path: 'viewContact/:id',
		component: ViewContactComponent
	}
];