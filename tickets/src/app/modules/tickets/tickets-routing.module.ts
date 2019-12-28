import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TicketsHomeComponent } from './tickets-home/tickets-home.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TicketsHomeComponent },
  { path: 'list', component: TicketsListComponent },
  { path: 'ticket/create', component: TicketCreateComponent },
  { path: 'ticket/edit/:ticketId', component: TicketEditComponent },
  { path: '', component: TicketsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
