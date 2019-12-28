import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  displayedColumns = ['id', 'provider', 'amount', 'currency', 'date', 'comment', 'edit'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    const tickets = this.ticketService.getTickets();
    this.dataSource = new MatTableDataSource(tickets);
  }

}
