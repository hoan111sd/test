import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
declare var Cookies:any;
@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!Cookies.get('username')) {
        return true;
      }
      this.router.navigate(['/home']);
    return false;
  }
}
