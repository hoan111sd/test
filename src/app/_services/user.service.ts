import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Subject } from "rxjs/Subject";
import { server } from "../../../config";

declare var Cookies: any;
@Injectable()
export class UserService {
  private userSource = new Subject<any>();
  private dataFromRegisTerPage = new Subject<any>();
  private isLogin = new Subject<any>();
  private inforUser = new Subject<any>();

  userSource$ = this.userSource.asObservable();
  dataFromRegisTerPage$ = this.dataFromRegisTerPage.asObservable();
  isLogin$ = this.isLogin.asObservable();
  inforUser$ = this.inforUser.asObservable();

  constructor(private _http: Http, @Inject(DOCUMENT) private _document) { }

  goToUrl(): void {
    this._document.location.href = "https://stackoverflow.com";
  }

  checkout(value): Observable<any> {
    console.log(value);
    const url = `${server}/api/checkout`;
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify(value);
    return this._http
      .post(url, body, { headers: headers })
      .map(res => res.json());
  }

  checkoutSuccess(value): Observable<any> {
    const url = `${server}/api/checkout/success`;
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify(value);
    return this._http
      .post(url, body, { headers: headers })
      .map(res => res.json());
  }

  logIn(value): Observable<any> {
    const url = `${server}/api/login`;
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify(value);
    return this._http
      .post(url, body, { headers: headers })
      .map(res => res.json());
  }

  register(value): Observable<any> {
    const url = `${server}/api/register`;
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify(value);
    return this._http
      .post(url, body, { headers: headers })
      .map(res => res.json());
  }

  sendDataUser(data: any) {
    this.userSource.next(data);
    // console.log(this.userSource$);
  }

  saveInfoUser(data: any) {
    this.userSource.next(data);
    // console.log(this.userSource$);
  }

  changePasswd(data) {
    const url = `${server}/api/changePassword`;
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify(data);
    return this._http
      .put(url, body, { headers: headers })
      .map(res => res.json());
  }

  changeInfo(data) {
    const url = `${server}/api/changeProfile`;
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify(data);
    return this._http
      .put(url, body, { headers: headers })
      .map(res => res.json());
  }

  // getAllProduct():Observable<any> {
  //   const headers = new Headers({'Content-Type': 'application/json' });
  //   return this._http.get('http://localhost:3001/api/products',{headers: headers}).map(res => res.json())
  // }

  loginFromRegisterPage(data: any) {
    this.dataFromRegisTerPage.next(data);
    console.log(data);
  }

  setLogin(data) {
    this.isLogin.next(data);
  }
}
