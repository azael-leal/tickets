import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

// Interfaces
import { ITicket } from '../../../interfaces/export-interfaces';

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
  dataSource = new MatTableDataSource<ITicket>([]);
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

  async getTickets(action?: string) {
    try {
      const tickets: ITicket[] = await this.ticketService.getTickets();
      this.matchDataWithTable(tickets);
      if (action === 'refreshData') { this.snackBarService.openSuccess('The list of tickets has been refreshed.'); }
    } catch (error) {
      this.snackBarService.openError('Something bad happened, please click the Refresh Data button.');
    }
  }

  private matchDataWithTable(data: ITicket[]) {
    this.dataSource = new MatTableDataSource<ITicket>(data);
    this.dataSource.paginator = this.paginator;
    this.matTable.renderRows();
  }

  private async deleteTicket(ticketId: number) {
    try {
      await this.ticketService.deleteTicket(ticketId);
      this.snackBarService.openSuccess(`The ticket # ${ticketId} was deleted successfully.`);
    } catch (error) {
      this.snackBarService.openError(`An error has occurred while deleting the ticket # ${ticketId}, please try again.`);
    }
  }

  openConfirmDeleteTicketDialog(ticketId: number) {
    const deleteTicketDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Ticket',
        message: `Are you sure you want to delete permanently the ticket # ${ticketId}?`
      }
    });

    deleteTicketDialog.afterClosed().subscribe( async result => {
      if (result) { await this.deleteTicket(ticketId); }
      await this.getTickets();
    });
  }

  openEditTicketDialog(ticketId: number) {
    const editTicketDialog = this.dialog.open(TicketEditComponent, {
      data: { id: ticketId }
    });

    editTicketDialog.afterClosed().subscribe( async result => {
        await this.getTickets();
    });
  }

}
