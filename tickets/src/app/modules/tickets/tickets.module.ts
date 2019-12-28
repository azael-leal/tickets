import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsHomeComponent } from './tickets-home/tickets-home.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';

@NgModule({
  declarations: [TicketsHomeComponent, TicketsListComponent, TicketCreateComponent, TicketEditComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MaterialModule
  ]
})
export class TicketsModule { }
