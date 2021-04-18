import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { GlobalErrorHandler } from '../services/error.handler.service';

@Injectable()
export class HttpInterceptorClass implements HttpInterceptor {

  constructor( private globalHandler: GlobalErrorHandler) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(
      (response) => {
        if (response instanceof HttpResponse) {
          
        }
      },
      (error) => {
         console.log(error)
         this.globalHandler.logError(error);
      }));
  }
}
