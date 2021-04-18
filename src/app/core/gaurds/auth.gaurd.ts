import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor() { }

  canActivate(): boolean {
    // Check do we have to authenticate the app
    // temporary code to ease development
    return true;
  }

}
