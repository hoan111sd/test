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
  selector: "app-checkout1",
  templateUrl: "./checkout1.component.html",
  styleUrls: ["./checkout1.component.css"]
})
export class Checkout1Component implements OnInit {
  public _checkout1: boolean = true;
  public _checkout4: boolean = false;
  public checkoutForm;
  public userName;
  public email;
  // public card = false;
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
  ) { }
  ngOnInit() {
    this.email = Cookies.get('email');
    this.userName = Cookies.get('username');
    this.checkoutForm = this.form.group({
      email: [
        this.email,
        [
          Validators.email,
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ]
      ],
      name: [
        this.userName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(24)]
      ],
      phone: [
        "",
        [Validators.required, Validators.minLength(9), Validators.maxLength(24)]
      ],
      address: [
        "",
        [Validators.required, Validators.minLength(9), Validators.maxLength(24)]
      ],
      paymentMethod: ["", [Validators.required]]
    });
    this.products = JSON.parse(localStorage.getItem("tempCart"));
    this.products && _.map(this.products, res => (this.total += +res.price));
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      let success = params["success"];
      if (success) {
        this._checkout1 = false;
        this._checkout4 = true;
        let PayerID = params["PayerID"];
        let paymentId = params["paymentId"];
        this.userService
          .checkoutSuccess({ PayerID, paymentId, userID: this.getUserId() })
          .subscribe(res => {
            localStorage.removeItem("tempCart");
          });
      }
    });
  }
  goToPaypal(url): void {
    this._document.location.href = url;
  }
  getUserId() {
    let userID;
    if (Cookies.get("id")) userID = Cookies.get("id");
    return userID;
  }
  checkout1() {
    let items = [];

    this.products.map(product => {
      let item = {
        _id: product._id,
        quantity: 1
      };
      items.push(item);
    });
    let data = {
      bill: this.checkoutForm.value,
      userID: "5aae88cc9c6e191a5736f844",
      items: items,
      total: this.total
    };
    this.userService.checkout(data).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.goToPaypal(res.href);
      }
    });
  }
}
