import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

// Interfaces
import { ITicket } from 'src/app/interfaces/export-interfaces';

// Services


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
  ) { }

  ngOnInit() {
  }

  triggerResize() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  save() {}

}
