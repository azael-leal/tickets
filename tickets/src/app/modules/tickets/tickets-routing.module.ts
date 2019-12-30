import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TicketsHomeComponent } from './tickets-home/tickets-home.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TicketsHomeComponent },
  { path: 'ticket/create', component: TicketCreateComponent },
  { path: '', component: TicketsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
