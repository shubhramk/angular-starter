import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    // Log the error
    this.logError(error);
  }

  /**
   * save log to server
   **/
  logError(error:any) {
  
    if (error['status'] === 401) {
      console.log('UnAuthorized')
    } else if (error instanceof HttpErrorResponse) {
      // do nothing as api is logging error
      if (!navigator.onLine) {
        // Handle offline error
      } else {
        // Handle Http Error (error.status === 403, 404...)
        if (error['status'] === 401) {
          console.log('UnAuthorized')
        }

      }
    } else {
        console.log(error)
    }

  }

}
