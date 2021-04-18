
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class HttpService {
  errorMessage: string = 'Server Error';
  // Resolve HTTP using the constructor
  constructor(
    private http: HttpClient) {

  }

  /**
  * @desc - get request
  * @param url - url of API
  */
  get(url: string): Observable<any> {
    // using get request
    return this.http.get(url, {
      headers: this.setHeaders()
    }).pipe(map((res: any) => res), catchError((err: any) => {
      return throwError({
        Error: err['error'] || this.errorMessage
      });
    }));

  }

  /**
   * @desc - post request
   * @param url - url of API
   * @param obj - object to be send
   */
  post(url:string, obj: any): Observable<any> {
    // using post request
    const body = obj;
    // using post request
    return this.http.post(url, body, {
      headers: this.setHeaders()
    }) // using post request
      .pipe(
        map((res: any) => res), catchError((err: any) => {
          return throwError({
            Error: err['error'] || this.errorMessage
          });
        })); // errors if any
  }

  /**
   * @desc - put request
   * @param url - url of API
   * @param obj - obj to be send
   */
  put(url:string, obj:any): Observable<any> {
    // using put request
    // Create a option
    const body = obj; // payload
    // using put request
    return this.http.put(url, body, {
      headers: this.setHeaders()
    }) // using put request
      .pipe(
        map((res: any) => res), catchError((err: any) => {
          return throwError({
            Error: err['error'] || this.errorMessage
          });
        })); // errors if any
  }


  /**
  * @desc - patch request
  * @param url - url of API
  * @param obj - obj to be send
  */
  patch(url:string, obj:any): Observable<any> {
    // using patch request
    // Create a option
    const body = obj; // payload
    // using put request
    return this.http.patch(url, body, {
      headers: this.setHeaders()
    }) // using put request
      .pipe(
        map((res: any) => res), catchError((err: any) => {
          return throwError({
            Error: err['error'] || this.errorMessage
          });
        })); // errors if any
  }

  /**
   * @desc - delete request
   * @param url - url of API
   * @param id - id to be send for delete
   */
  delete(url:string, id: string = ''): Observable<any> {
    if (id) {
      url = `${url}/${id}`;
    }
    return this.http.delete(url, {
      headers: this.setHeaders()
    }) // using delete request
      .pipe(map((res: any) => res), catchError((err: any) => throwError({
        Error: err['error'] || this.errorMessage
      }))); // errors if any
  }

  /**
  * @desc - delete request
  * @param url - url of API
  * @param body - body to be send for delete
  */
  deleteWithBody(url:string, body: any): Observable<any> {
    return this.http.request('delete', url, {
      headers: this.setHeaders(),
      body: body
    }) // using delete request
      .pipe(map((res: any) => res), catchError((err: any) => throwError({
        Error: err['error'] || this.errorMessage
      }))); // errors if any
  }


  download(url:string, filters: any): Promise<any> {

    const headerObj: Object = {
      responseType: 'arraybuffer',
      observe: 'response',
      headers: this.setHeaders()
    };
    return this.http.get(url, headerObj)
    .toPromise()
    .then((res: any) => {
      return res;
    }).catch((err: any) => {
      return Promise.reject({
        Error: err['error'] || this.errorMessage
      });
    });
  }

  downloadWithPost(url:string, obj: Object): Promise<any> {
    const authKey = '';
    const customHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + authKey
    });

    return this.http.post(url, obj, {
      responseType: 'arraybuffer',
      observe: 'response',
      headers: customHeaders
    })
      .toPromise()
      .then((res: any) => {
        return res;
      }).catch((err: any) => {
        return Promise.reject({
          Error: err['error'] || this.errorMessage
        });
      });
  }

  setHeaders() {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() - 1);

    // Create a request option
    const header = new HttpHeaders({
      'Authorization': `Bearer`,
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': `${expiryDate}`
    });
    return header;
  }

}
