import { Component, OnInit, AfterViewInit } from "@angular/core";
// import Rx from 'rxjs/Rx';
import * as _ from 'lodash';
import * as Rx from 'rxjs';
import { Router } from '@angular/router';
import { ProductsService } from '../../_services/products.service';
import { UserService } from '../../_services/user.service';
import { log } from 'util';
declare var $: any;
declare var Cookies: any;
@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"]
})
export class BasketComponent implements OnInit {
  quanlity: number = 1;
  products = [];
  userID = "";
  total = 0;
  // isLogin:boolean;
  countProducts = 0;
  product = {
    _id: "",
    name: "",
    price: "",
    brand: "",
    rating: "",
    sale: "",
    new: "",
    kind: "",
    description: "",
    mainImage: "",
    slides: ["", "", "", ""],
    ingerdients: "",
    howto: "",
    createAt: ""
  };
  constructor(
    private router: Router,
    private productsService: ProductsService,
    private userService: UserService
  ) {
    userService.isLogin$.subscribe(res => {
      this.userID = res;
    });
  }

  ngOnInit() {
    this.userID = this.getUserID();

    //wishList
    // this.productsService.getCart(this.userID).subscribe(res => {
    //   if(res) {
    //     this.products = res.product;
    //     if(this.products) this.countProducts = this.products.length;
    //     _.map(this.products, res => this.total += +res.price)
    //   }
    //  }
    // )
    if (typeof (Storage) !== "undefined") {
      this.products = JSON.parse(localStorage.getItem("tempCart"));
      console.log("aaaaaa", this.product);
      if (this.products) this.countProducts = this.products.length;
      _.map(this.products, res => this.total += (res.price * res.qty))
    }
  }

  ngAfterViewInit() { }

  checkout() {
    this.productsService.setTempCart(this.products);
    this.router.navigate(["/checkout"]);
  }

  getUserID() {
    if (Cookies.get("id")) this.userID = Cookies.get("id");
    else if (Cookies.get("idGG")) this.userID = Cookies.get("idGG");
    else if (Cookies.get("idFB")) this.userID = Cookies.get("idFB");
    return this.userID;
  }

  deleteProduct(index) {
    this.total -= this.products[index].price * this.products[index].qty;
    this.products.splice(index, 1);
    if (this.products) this.countProducts = this.products.length;
    localStorage.setItem("tempCart", JSON.stringify(this.products));
  }
}
