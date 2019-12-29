import { Component, OnInit, NgZone, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

// Interfaces
import { ITicket } from 'src/app/interfaces/export-interfaces';

// Services


@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  ticket: ITicket = { id: null };

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(
    private ngZone: NgZone,
    private dialog: MatDialogRef<TicketEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  triggerResize() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  save() {}

}
