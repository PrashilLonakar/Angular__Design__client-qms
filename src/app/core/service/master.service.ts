import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BaseUrl } from '../../utils/base-url-constant';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = environment.baseUrl;
  //public token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  
  createKiosk = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.kiosk + 'create-kiosk';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  modifyKiosk = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.kiosk + 'modify-kiosk';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  deleteKiosk = (id): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.kiosk + 'delete-kiosk' + '/' + id;
    return this.http.delete(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getKiosk = (): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.kiosk;
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
}
