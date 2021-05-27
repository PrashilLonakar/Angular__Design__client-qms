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
    const endpoint = this.baseUrl + 'api/kiosk';
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getKioskWithId = (id): Observable<any> => {
    const endpoint = this.baseUrl + 'api/kiosk' + '/' + id;
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  createIptv = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.iptv + 'create-iptv';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  modifyIptv = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.iptv + 'modify-iptv';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  deleteIptv = (id): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.iptv + 'delete-iptv' + '/' + id;
    return this.http.delete(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getIptv = (): Observable<any> => {
    const endpoint = this.baseUrl + 'api/iptv';
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getIptvWithId = (id): Observable<any> => {
    const endpoint = this.baseUrl + 'api/iptv' + '/' + id;
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

}



