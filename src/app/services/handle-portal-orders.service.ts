import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HandlePortalOrdersService {

  constructor(
    private _http: HttpClient
  ) { }

  public getOrders(query: any): Observable<any> {
    console.log(query)
    return this._http.post<any>(`${environment.hostApi}/orders-portal/get-orders`, query).pipe(
      map(response => {
        if(response) {
          return response;
        } else {
          throw 'error';
        }
      })
    );
  }
}
