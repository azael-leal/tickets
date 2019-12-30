import { Component, OnInit, NgZone, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

// Interfaces
import { ITicket } from 'src/app/interfaces/export-interfaces';

// Services
import { TicketService, SnackbarService } from 'src/app/services/export-services';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  ticket: ITicket = { id: null };
  today: Date = new Date();

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(
    private ngZone: NgZone,
    private ticketService: TicketService,
    private snackBarService: SnackbarService,
    private dialog: MatDialogRef<TicketEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.getTicket(this.data.id);
  }

  triggerResize() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  async getTicket(ticketId: number) {
    try {
      this.ticket = await this.ticketService.getTicket(ticketId);
    } catch (error) {
      this.snackBarService.openError('An error has occurred, please try again.');
    }
  }

  async updateTicket() {
    try {
      await this.ticketService.updateTicket(this.ticket.id, this.ticket);
      this.snackBarService.openSuccess(`Ticket # ${this.ticket.id} was updated successfully.`);
      this.dialog.close();
    } catch (error) {
      this.snackBarService.openError('An error has occurred while updating, please try again.');
    }
  }

}
