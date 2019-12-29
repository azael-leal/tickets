import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

// Interfaces
import { ITickets } from '../../../interfaces/export-interfaces';

// Services
import { TicketService, SnackbarService } from '../../../services/export-services';

// Dialogs - Components
import { TicketEditComponent,  } from '../ticket-edit/ticket-edit.component';
import { ConfirmDialogComponent } from '../../../shared/dialogs/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  displayedColumns = ['id', 'provider', 'amount', 'currency', 'date', 'comment', 'edit', 'delete'];
  dataSource = new MatTableDataSource<ITickets>([]);
  @ViewChild(MatTable, {static: false}) matTable: MatTable<any>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService,
    private snackBarService: SnackbarService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(action?: string) {
    try {
      const tickets: ITickets[] = this.ticketService.getTickets();
      this.matchDataWithTable(tickets);
      if (action === 'updateTable') { this.snackBarService.openSuccess('Table Updated'); }
    } catch (error) {
      this.snackBarService.openError(error);
    }
  }

  private matchDataWithTable(data: ITickets[]) {
    this.dataSource = new MatTableDataSource<ITickets>(data);
    this.dataSource.paginator = this.paginator;
    // this.matTable.renderRows();
  }

  private async deleteTicket(ticketId: number) {
    try {
      const deleteTicket = await this.ticketService.deleteTicket(ticketId);
    } catch (error) {
      this.snackBarService.openError(error);
    }
  }

  openConfirmDeleteTicketDialog(ticketId: number) {
    const deleteTicketDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Ticket',
        message: `Are you sure you want to delete permanently the ticket #${ticketId}?`
      }
    });

    deleteTicketDialog.afterClosed().subscribe( result => {
      if (result) {
        this.deleteTicket(ticketId);
        this.getTickets();
      }
    });
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
