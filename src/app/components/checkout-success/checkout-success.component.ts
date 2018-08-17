import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { ProductsService } from "../../_services/products.service";
import { DOCUMENT } from "@angular/platform-browser";
import * as Rx from "rxjs";
import * as _ from "lodash";
declare var Cookies: any;
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-checkout-success",
  templateUrl: "./checkout-success.component.html",
  styleUrls: ["./checkout-success.component.css"]
})
export class CheckoutSuccessComponent implements OnInit {
  public _checkout1: boolean = false;
  public _checkout4: boolean = true;
  public checkoutForm;
  products = [];
  total = 0;
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
    private router: Router,
    private userService: UserService,
    private productsService: ProductsService,
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("tempCart"));
    this.products && _.map(this.products, res => (this.total += +res.price));
    console.log(this.checkoutForm.value);
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let PayerID = params["PayerID"];
      let paymentId = params["paymentId"];

      this.userService
        .checkoutSuccess({ PayerID, paymentId, userID: this.getUserId() })
        .subscribe(res => {
          localStorage.removeItem("tempCart");
        });
    });
  }

  getUserId() {
    let userID;
    if (Cookies.get("id")) userID = Cookies.get("id");
    return userID;
  }
}
