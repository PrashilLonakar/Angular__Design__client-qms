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

  createDesk = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.desk + 'create-desk';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  modifyDesk = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.desk + 'modify-desk';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  deleteDesk = (id): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.desk + 'delete-desk' + '/' + id;
    return this.http.delete(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getDesk = (): Observable<any> => {
    const endpoint = this.baseUrl + 'api/desk';
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getDeskWithId = (id): Observable<any> => {
    const endpoint = this.baseUrl + 'api/desk' + '/' + id;
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };


  createBox = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.box + 'create-box';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  modifyBox = (data): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.box + 'modify-box';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  deleteBox = (id): Observable<any> => {
    const endpoint = this.baseUrl + BaseUrl.box + 'delete-box' + '/' + id;
    return this.http.delete(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getBox = (): Observable<any> => {
    const endpoint = this.baseUrl + 'api/box';
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getBoxWithId = (id): Observable<any> => {
    const endpoint = this.baseUrl + 'api/box' + '/' + id;
    return this.http.get(endpoint).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

}



