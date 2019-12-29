import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

// Interfaces
import { ITicket } from 'src/app/interfaces/export-interfaces';

// Services
import { TicketService, SnackbarService } from '../../../services/export-services';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  ticket: ITicket = { id: null };

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private ticketService: TicketService,
    private snackBarService: SnackbarService,
  ) { }

  ngOnInit() {
  }

  triggerResize() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  async createTicket() {
    try {
      const saveTicket = await this.ticketService.createTicket(this.ticket);
      this.router.navigate(['/tickets/home']);
    } catch (error) {
      this.snackBarService.openError(error)
    }
  }

}
