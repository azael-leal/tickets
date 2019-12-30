import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

// Interfaces
import { ITicket } from '../interfaces/export-interfaces';

// Services
import { BaseService, httpOptions, handleError } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseService {

  private URL_TICKET = this.IP_TICKETS;

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getTickets(): Promise<ITicket[]> {
    return this.http.get<ITicket[]>(this.URL_TICKET, httpOptions).pipe(catchError(handleError)).toPromise();
  }

  getTicket(ticketId: number): Promise<ITicket> {
    return this.http.get<ITicket>(`${this.URL_TICKET}/${ticketId}`, httpOptions).pipe(catchError(handleError)).toPromise();
  }

  createTicket(ticket: ITicket): Promise<ITicket> {
    return this.http.post<ITicket>(this.URL_TICKET, ticket, httpOptions).pipe(catchError(handleError)).toPromise();
  }

  updateTicket(ticketId: number, ticket: ITicket) {
    return this.http.put<ITicket>(`${this.URL_TICKET}/${ticketId}`, ticket, httpOptions).pipe(catchError(handleError)).toPromise();
  }

  deleteTicket(ticketId: number) {
    return this.http.delete<ITicket>(`${this.URL_TICKET}/${ticketId}`, httpOptions).pipe(catchError(handleError)).toPromise();
  }

}
