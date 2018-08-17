import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Http, Headers, Response } from "@angular/http";
import { ReplaySubject } from "rxjs/ReplaySubject";

import * as Config from "../../../config";

@Injectable()
export class ProductsService {
  private productInCart = new ReplaySubject<any>(10);
  // private productInCart = new Subject;
  productInCart$ = this.productInCart.asObservable();

  public headers = new Headers({ "Content-Type": "application/json" });
  constructor(private _http: Http) {}

  getAll(): Observable<any> {
    return this._http
      .get(`${Config.server}/api/products`, { headers: this.headers })
      .map(res => res.json());
  }

  getProduct(url): Observable<any> {
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }

  setTempCart(data) {
    this.productInCart.next(data);
  }

  submitComment(data): Observable<any> {
    return this._http
      .post(`${Config.server}/api/submitComment`, data, {
        headers: this.headers
      })
      .map(res => res.json());
  }

  getComments(productID): Observable<any> {
    return this._http
      .get(`${Config.server}/api/comments/` + productID, {
        headers: this.headers
      })
      .map(res => res.json());
  }

  getCart(data): Observable<any> {
    let url = `${Config.server}/api/getCart`;
    return this._http
      .post(url, { userID: data }, { headers: this.headers })
      .map(res => res.json());
  }

  addCart(data): Observable<any> {
    let url = `${Config.server}/api/addCart`;
    return this._http
      .post(url, data, { headers: this.headers })
      .map(res => res.json());
  }

  getRelatedProducts(id) {
    let url = `${Config.server}/api/relatedProducts/` + id;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getHotProducts() {
    let url = `${Config.server}/api/hot`;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getNewProducts() {
    let url = `${Config.server}/api/newProducts`;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getCategories() {
    let url = `${Config.server}/api/categories`;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getBrands() {
    let url = `${Config.server}/api/brands`;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  search2(text) {
    let data = { searchText: text };
    let url = `${Config.server}/api/search/`;
    return this._http
      .post(url, data, { headers: this.headers })
      .map(res => res.json());
  }
  getRecommentProducts(userId) {
    let url = `${Config.server}/api/recommenderProducts/` + userId;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getCategory(categoryId) {
    let url = `${Config.server}/api/category/` + categoryId;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getBrandProducts(brandId) {
    let url = `${Config.server}/api/brand/` + brandId;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
  getProductsPage(page: number): Observable<any> {
    let url = `${Config.server}/api/products/` + page;
    return this._http
      .get(url, { headers: this.headers })
      .map(res => res.json());
  }
}
