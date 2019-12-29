import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private IP_MAIN = environment.SERVER_URL;

  public IP_SEGUIMIENTOS_API = this.IP_MAIN + environment.API_TICKETS;
}
