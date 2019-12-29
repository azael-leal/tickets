import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

// Interfaces
import { ITickets } from '../../../interfaces/export-interfaces';

// Services
import { TicketService } from '../../../services/export-services';

// Dialogs - Components
import { TicketEditComponent } from '../ticket-edit/ticket-edit.component';


@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  displayedColumns = ['id', 'provider', 'amount', 'currency', 'date', 'comment', 'edit'];
  dataSource = new MatTableDataSource<ITickets>([]);
  @ViewChild(MatTable, {static: false}) matTable: MatTable<any>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    const tickets: ITickets[] = this.ticketService.getTickets();
    this.matchDataWithTable(tickets);
  }

  private matchDataWithTable(data: ITickets[]) {
    this.dataSource = new MatTableDataSource<ITickets>(data);
    this.dataSource.paginator = this.paginator;
    // this.matTable.renderRows();
  }

  async deleteTicket(ticketId: number) {
    try {
      const deleteTicket = await this.ticketService.deleteTicket(ticketId);
    } catch (error) {
      console.log(error);
    }
  }

  openEditTicketDialog(ticketId: number) {
    const editTicketDialog = this.dialog.open(TicketEditComponent, {
      data: { id: ticketId }
    });

    editTicketDialog.afterClosed().subscribe( result => {
        this.getTickets();
    });
  }

}
