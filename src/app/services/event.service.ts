import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  public fetchEvents(): any{
    return this.httpClient.get(`${environment.ApiUrl}/get-event`);
  }

  public filterByEmail(email): any{
    return this.httpClient.get(`${environment.ApiUrl}/get-event?email=${email}`);
  }

  public filterByEnv(env): any{
    return this.httpClient.get(`${environment.ApiUrl}/get-event?environment=${env}`);
  }
}
