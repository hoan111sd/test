import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./_services/user.service";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  Form
} from "@angular/forms";
import { FacebookService, LoginResponse, LoginOptions } from "ngx-facebook";
import { Observable } from "rxjs/Observable";
import { ModalDirective } from "ngx-bootstrap/modal";
import { NgStyle } from "@angular/common";
import * as _ from "lodash";
import { DetailComponent } from "./components/detail/detail.component";
import { ProductsService } from "./_services/products.service";
import { TypeaheadMatch } from "ngx-bootstrap";

declare var gapi: any;
declare var $: any;
declare var Cookies: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("staticModal") public staticModal: ModalDirective;
  public customSelected: string;
  public messageLogin: string = "";
  public loginForm: FormGroup;
  public isLogin: boolean = false;
  public username: string = "";
  public expires = 30;
  public auth2: any;
  public brands = [];
  public inputSearch;
  public saleMenu = [];
  public shopMenu = [];
  public allProduct: any[] = [];
  public newProducts = [];
  public countProductsInCart = 0;
  public captcha;
  public isCheckCaptcha = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private form: FormBuilder,
    private FB: FacebookService,
    private productsService: ProductsService
  ) {
    FB.init({
      appId: "498084857228611",
      cookie: true,
      xfbml: true,
      version: "v2.10"
    });
    userService.dataFromRegisTerPage$.subscribe(res => this.setLogin());
    // productsService.productDetail$.subscribe(res => this.productsInCart++);
    this.setLogin();
    productsService.getAll().subscribe(res => {
      this.allProduct = res.data;
    });
  }
  public googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "461755935424-ue7n0vf2al071aiov9kto5ftugcoet36.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        scope: "profile email"
      });
      this.attachSignin(document.getElementById("loginGoogle"));
    });
  }
  ngAfterViewInit() {
    this.googleInit();
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(
      element,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();

        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('ID: ' + profile.getId());
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        let id = profile.getId();
        //MY CODE HERE
        Cookies.set("token", googleUser.getAuthResponse().id_token, {
          expires: this.expires,
          path: "/"
        });
        Cookies.set("username", profile.getName(), {
          expires: this.expires,
          path: "/"
        });
        Cookies.set("idGG", id, { expires: this.expires, path: "/" });
        this.userService.setLogin(id);
        let data = {
          userID: profile.getId(),
          accessToken: googleUser.getAuthResponse().id_token
        };
        //call api to server
        this.setLogin();
        this.staticModal.hide();
        location.reload();
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  }
  ngOnInit() {
    this.loginForm = this.form.group({
      email: [
        "",
        [
          Validators.email,
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ]
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(24)]
      ]
    });
    if (localStorage.getItem("tempCart"))
      this.countProductsInCart = JSON.parse(
        localStorage.getItem("tempCart")
      ).length;
    this.productsService.productInCart$.subscribe(res => {
      this.countProductsInCart = JSON.parse(
        localStorage.getItem("tempCart")
      ).length;
      console.log(res);
    });
    this.productsService.getCategories().subscribe(res => {
      // console.log(res.data);
      this.saleMenu = res.data;
      this.shopMenu = res.data;
      // res.data.map(category => {
      //   this.saleMenu.push(category.name);
      //   this.shopMenu.push(category.name);
      // });
    });
    if (localStorage.getItem("tempCart"))
      this.countProductsInCart = JSON.parse(
        localStorage.getItem("tempCart")
      ).length;
    this.productsService.productInCart$.subscribe(res => {
      this.countProductsInCart = JSON.parse(
        localStorage.getItem("tempCart")
      ).length;
    });
    this.productsService.getCategories().subscribe(res => {
      this.saleMenu = res.data;
      this.shopMenu = res.data;
    });
    this.productsService.getBrands().subscribe(res => {
      this.brands = res.data;
    });
  }

  public typeaheadOnSelect(e: TypeaheadMatch): void {
    let product = _.find(this.allProduct, ["name", e.value]);
    this.router.navigate(["/detail", product._id]);
    this.customSelected = "";
    this.productsService.getBrands().subscribe(res => {
      // console.log(res.data);
      this.brands = res.data;
      // res.data.map(brand => {
      //   this.brands.push(brand.name);
      // });
    });
  }

  // public typeaheadOnSelect(e: TypeaheadMatch): void {
  //   let product = _.find(this.allProduct, ["name", e.value]);
  //   this.router.navigate(["/detail", product._id]);
  //   this.customSelected = "";
  // }

  logIn() {
    let username = "";
    const value = this.loginForm.value;
    const data = {
      email: value.email,
      password: value.password,
      recaptcha: this.captcha
    };
    this.userService.logIn(data).subscribe(res => {
      if (res.success == true) {
        this.userService.setLogin(true);
        if (res.data[0].profile.firstName)
          username =
            res.data[0].profile.firstName + " " + res.data[0].profile.lastName;
        // if (res.success === true) {
        //   Cookies.set('username', username, { expires: this.expires, path: '/' });
        //   Cookies.set('id', res.data[0]._id, { expires: this.expires, path: '/' });
        //   Cookies.set('token', res.data[0].token, { expires: this.expires, path: '/' });
        //   Cookies.set('email', res.data[0].email, { expires: this.expires, path: '/' });
        //   username =
        //     res.data[0].profile.firstName + " " + res.data[0].profile.lastName;

        if (res.success === true) {
          Cookies.set("username", username, {
            expires: this.expires,
            path: "/"
          });
          Cookies.set("id", res.data[0]._id, {
            expires: this.expires,
            path: "/"
          });
          Cookies.set("token", res.data[0].token, {
            expires: this.expires,
            path: "/"
          });
          this.setLogin();
          this.loginForm.reset();
          this.staticModal.hide();
          location.reload();
        }
      } else this.messageLogin = res.error;
    });
  }

  goToContact() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(["/contact"]);
    event.preventDefault();
  }

  loginFB() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: "public_profile,user_friends,email"
    };
    this.FB.login(loginOptions)
      .then((res: LoginResponse) => {
        this.getProfileFB();
        this.userService.setLogin(res.authResponse.userID);
        Cookies.set("token", res.authResponse.accessToken, {
          expires: this.expires,
          path: "/"
        });
        Cookies.set("idFB", res.authResponse.userID, {
          expires: this.expires,
          path: "/"
        });
        const data = {
          userID: res.authResponse.userID,
          accessToken: res.authResponse.accessToken
        };
        // goi API loginFB gui 'data' len server

        this.staticModal.hide();
        //make sure that user can't go to Register page when logined, so If api response 200 -> location.reload()
        // setTimeout(function () { location.reload(); }, 400);
        setTimeout(function() {
          location.reload();
        }, 400);
      })
      .catch(this.handleError);
  }

  logout() {
    //logout with FB
    this.FB.getLoginStatus().then(response => {
      if (response && response.status === "connected") {
        this.FB.logout().then(res => {
          this.userService.setLogin("");
          this.removeCookies();
        });
      }
    });
    //logout with Google
    if (Cookies.get("idGG")) {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(res => {
        this.userService.setLogin("");
        this.removeCookies();
      });
    }
    //logout with user
    else {
      this.userService.setLogin("");
      this.removeCookies();
    }
  }

  getProfileFB() {
    this.FB.getLoginStatus().then(res => {
      if (res.status === "connected") {
        this.FB.api("/me")
          .then((res: any) => {
            Cookies.set("username", res.name, {
              expires: this.expires,
              path: "/"
            });
            this.username = res.name;
            this.isLogin = true;
            this.userService.sendDataUser(this.isLogin);
          })
          .catch(this.handleError);
      }
    });
  }

  private handleError(error) {
    console.error("Error processing action", error);
  }
  setLogin() {
    if (Cookies.get("token")) {
      this.username = Cookies.get("username");
      this.isLogin = true;
      this.userService.sendDataUser(this.isLogin);
    } else {
      this.isLogin = false;
      this.userService.sendDataUser(this.isLogin);
    }
  }

  removeCookies() {
    Cookies.get("username") && Cookies.remove("username", { path: "/" });
    Cookies.get("token") && Cookies.remove("token", { path: "/" });
    Cookies.get("idGG") && Cookies.remove("idGG", { path: "/" });
    Cookies.get("idFB") && Cookies.remove("idFB", { path: "/" });
    Cookies.get("id") && Cookies.remove("id", { path: "/" });
    this.setLogin();
  }

  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.isCheckCaptcha = true;
      return (this.captcha = captchaResponse);
    } else {
      this.isCheckCaptcha = false;
      return (this.captcha = captchaResponse);
    }
  }

  searchSimple(searchStr) {
    console.log(searchStr);
  }
}
