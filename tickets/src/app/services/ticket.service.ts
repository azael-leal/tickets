import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

// Interfaces
import { ITicket } from '../interfaces/export-interfaces';

// Services
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseService {

  // private URL_GET_DEMORA = this.IP_SEGUIMIENTOS_API + 'Delay/';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  // getTickets(): Promise<any> {
  //   return this.http.get<any>(this.URL_GET_DEMORA, httpOptions)
  //   .pipe(catchError(handleError))
  //   .toPromise();
  // }

  getTickets() {
    const tickets: any[] = [
      {
      id: 1,
      provider: 'axosnet',
      amount: 20.10,
      currency: 'bolivares',
      date: '5/2/2007',
      comment: 'welcome to the jungle'
      },
      {
      id: 2,
      provider: 'epicor',
      amount: 50.20,
      currency: 'pesos',
      date: '10/10/2015',
      comment: 'luminosity'
      },
      {
      id: 3,
      provider: 'northware',
      amount: 100.59,
      currency: 'dolares',
      date: '1/10/2010',
      comment: 'lorem pass'
      },
    ];

    return tickets;
  }

  createTicket(ticket: ITicket) {}

  updateTicket(ticket: ITicket) {}

  deleteTicket(ticketId: number) {}

}
