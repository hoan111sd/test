webpackJsonp(["main"],{

/***/ "../../../../../config.js":
/***/ (function(module, exports) {

module.exports = {
  // server: "https://comestics-shop.herokuapp.com",
  server: "http://localhost:3001",
  stripe: {
    username: "ltudm.uit@gmail.com",
    password: "laptrinhungdungmang"
  }
};


/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (Cookies.get('username')) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/checkout.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router) {
        this.router = router;
    }
    CheckoutGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('tempCart')) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    CheckoutGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], CheckoutGuard);
    return CheckoutGuard;
    var _a;
}());

//# sourceMappingURL=checkout.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(router) {
        this.router = router;
    }
    RegisterGuard.prototype.canActivate = function (next, state) {
        if (!Cookies.get('username')) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    RegisterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], RegisterGuard);
    return RegisterGuard;
    var _a;
}());

//# sourceMappingURL=register.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_services/pagination.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    PaginationService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 9; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PaginationService;
}());

//# sourceMappingURL=pagination.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
        this.productInCart = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](10);
        // private productInCart = new Subject;
        this.productInCart$ = this.productInCart.asObservable();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
    }
    ProductsService.prototype.getAll = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/products", { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getProduct = function (url) {
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.setTempCart = function (data) {
        this.productInCart.next(data);
    };
    ProductsService.prototype.submitComment = function (data) {
        return this._http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/submitComment", data, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getComments = function (productID) {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/comments/" + productID, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getCart = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/getCart";
        return this._http
            .post(url, { userID: data }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.addCart = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/addCart";
        return this._http
            .post(url, data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getRelatedProducts = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/relatedProducts/" + id;
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getHotProducts = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/hot";
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getNewProducts = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/newProducts";
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getCategories = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/categories";
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getBrands = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/brands";
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.search2 = function (text) {
        var data = { searchText: text };
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/search/";
        return this._http
            .post(url, data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getRecommentProducts = function (userId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/recommenderProducts/" + userId;
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getCategory = function (categoryId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/category/" + categoryId;
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getBrandProducts = function (brandId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/brand/" + brandId;
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getProductsPage = function (page) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["server"] + "/api/products/" + page;
        return this._http
            .get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ProductsService);
    return ProductsService;
    var _a;
}());

//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserService = /** @class */ (function () {
    function UserService(_http, _document) {
        this._http = _http;
        this._document = _document;
        this.userSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.dataFromRegisTerPage = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.isLogin = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.inforUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.userSource$ = this.userSource.asObservable();
        this.dataFromRegisTerPage$ = this.dataFromRegisTerPage.asObservable();
        this.isLogin$ = this.isLogin.asObservable();
        this.inforUser$ = this.inforUser.asObservable();
    }
    UserService.prototype.goToUrl = function () {
        this._document.location.href = "https://stackoverflow.com";
    };
    UserService.prototype.checkout = function (value) {
        console.log(value);
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["server"] + "/api/checkout";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var body = JSON.stringify(value);
        return this._http
            .post(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.checkoutSuccess = function (value) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["server"] + "/api/checkout/success";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var body = JSON.stringify(value);
        return this._http
            .post(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.logIn = function (value) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["server"] + "/api/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var body = JSON.stringify(value);
        return this._http
            .post(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.register = function (value) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["server"] + "/api/register";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var body = JSON.stringify(value);
        return this._http
            .post(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.sendDataUser = function (data) {
        this.userSource.next(data);
        // console.log(this.userSource$);
    };
    UserService.prototype.saveInfoUser = function (data) {
        this.userSource.next(data);
        // console.log(this.userSource$);
    };
    UserService.prototype.changePasswd = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["server"] + "/api/changePassword";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var body = JSON.stringify(data);
        return this._http
            .put(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.changeInfo = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["server"] + "/api/changeProfile";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var body = JSON.stringify(data);
        return this._http
            .put(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getAllProduct():Observable<any> {
    //   const headers = new Headers({'Content-Type': 'application/json' });
    //   return this._http.get('http://localhost:3001/api/products',{headers: headers}).map(res => res.json())
    // }
    UserService.prototype.loginFromRegisterPage = function (data) {
        this.dataFromRegisTerPage.next(data);
        console.log(data);
    };
    UserService.prototype.setLogin = function (data) {
        this.isLogin.next(data);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warning {\n    color: #D9534F;\n    padding-top: 4px;\n    padding-left: 2px;\n}\n.modal-body form p {\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n}\n.advanced-search {\n    display: block;\n    margin: 0 auto;\n    line-height: 70px;\n}\n.modal-sm {\n    width: 335px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- *** TOPBAR ***\n _________________________________________________________ -->\n<div id=\"top\">\n  <div class=\"container\">\n    <div class=\"col-md-6 offer\">\n      <!-- <a href=\"#\" class=\"btn btn-success btn-sm\" data-animate-hover=\"shake\">Offer of the day</a>\n      <a href=\"#\">Get flat 35% off on orders over $50!</a> -->\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"!isLogin\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"#\" data-toggle=\"modal\" (click)=\"staticModal.show()\">Login</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/contact']\">Contact</a>\n        </li>\n        <!-- <li>\n          <a href=\"\">Recently viewed</a>\n        </li> -->\n      </ul>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"isLogin\">\n      <ul class=\"menu\">\n        <li>\n          <!-- route .customer-account -->\n          <a [routerLink]=\"['/account']\">{{username}}</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/contact']\">Contact</a>\n        </li>\n        <li>\n          <a routerLink=\"/home\" (click)=\"logout()\">\n            <i class=\"fa fa-sign-out\"></i> Log out</a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n  <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"staticModal.hide()\">&times;</button>\n          <h4 class=\"modal-title\" id=\"Login\">Customer login</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form #f=\"ngForm\" (ngSubmit)=\"logIn()\" [formGroup]=\"loginForm\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"email-modal\" placeholder=\"email\" formControlName=\"email\">\n              <div *ngIf=\"loginForm.get('email').errors && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                <!-- <div [hidden]=\"!email.errors.required\" class=\"warning\">*Name is required</div>\n                <div [hidden]=\"!email.errors.minlength\" class=\"warning\">*Username has at least 4 characters</div> -->\n                <div [hidden]=\"!loginForm.get('email').errors.email || loginForm.get('email').value == '' \" class=\"warning\">*Email is not valid</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" id=\"password-modal\" placeholder=\"password\" formControlName=\"password\">\n            </div>\n            <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG\"></re-captcha>\n            <div class=\"warning\" [hidden]=\"messageLogin==''\" style=\"margin-top:-15px;margin-bottom:5px;\">{{messageLogin}}</div>\n            <p class=\"text-center\">\n              <button class=\"btn btn-primary\" [disabled]=\"!(f.form.valid && isCheckCaptcha == true)\" style=\"margin-top: 10px;\">\n                <i class=\"fa fa-sign-in\"></i> Log in</button>\n            </p>\n          </form>\n          <button class=\"btn btn-md btn-social btn-facebook btn-block\" style=\"font-size: 1em; margin-top:5px;\" (click)=\"loginFB()\">\n            <i class=\"fa fa-facebook fa-fw\"></i>Sign in with Facebook\n          </button>\n          <button class=\"btn btn-md btn-social btn-google btn-block\" style=\"font-size: 1em; margin-top:5px;\" id=\"loginGoogle\" (data-onsuccess)=\"loginGG()\">\n            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>Sign in with Google\n          </button>\n          <p class=\"text-center text-muted\">Not registered yet?</p>\n          <p class=\"text-center text-muted\">\n            <a routerLink=\"/register\" routerLinkActive=\"active\">\n              <strong>Register now</strong>\n            </a>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- *** TOP BAR END *** -->\n\n<!-- *** NAVBAR ***\n _________________________________________________________ -->\n\n<div class=\"navbar navbar-default yamm\" role=\"navigation\" id=\"navbar\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n\n      <a class=\"navbar-brand home\" routerLink=\"/home\" data-animate-hover=\"bounce\">\n        <img src=\"./assets/img/logo.png\" alt=\"Obaju logo\" class=\"hidden-xs\">\n        <img src=\"./assets/img/logo-small.png\" alt=\"Obaju logo\" class=\"visible-xs\">\n        <span class=\"sr-only\">Obaju - go to homepage</span>\n      </a>\n      <div class=\"navbar-buttons\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <i class=\"fa fa-align-justify\"></i>\n        </button>\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#search\">\n          <span class=\"sr-only\">Toggle search</span>\n          <i class=\"fa fa-search\"></i>\n        </button>\n        <a class=\"btn btn-default navbar-toggle\" routerLink=\"/basket\">\n          <i class=\"fa fa-shopping-cart\"></i>\n          <span class=\"hidden-xs\">3 items in cart</span>\n        </a>\n      </div>\n    </div>\n    <!--/.navbar-header -->\n\n    <div class=\"navbar-collapse collapse\" id=\"navigation\">\n\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li class=\"active\">\n          <a routerLink=\"/home\">Home</a>\n\n        </li>\n        <li class=\"dropdown yamm-fw\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\">NHÃN HÀNG\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"yamm-content\">\n                <div class=\"row\">\n                  <div class=\"col-sm-9\">\n                    <h5>Brands</h5>\n                    <div *ngFor=\"let item of brands\">\n                      <a [routerLink]=\"['/category', 'brands', item._id]\" style=\"float: left; margin-right: 5px\">{{item.name}} -</a>\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-sm-3\">\n                    <h5>Brands</h5>\n                    <ul *ngFor=\"let item of brands\">\n                      <li>\n                        <a [routerLink]=\"['/category', item]\">...</a>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <h5>Brands</h5>\n                    <ul *ngFor=\"let item of brands\">\n                      <li>\n                        <a [routerLink]=\"['/category', item]\">...</a>\n                      </li>\n                    </ul>\n                  </div> -->\n                  <div class=\"col-sm-3\">\n                    <div class=\"banner\">\n                      <a href=\"#\">\n                        <img src=\"./assets/img/bg1.jpg\" class=\"img img-responsive\" alt=\"\">\n                      </a>\n                    </div>\n                    <div class=\"banner\">\n                      <a href=\"#\">\n                        <img src=\"./assets/img/bg2.jpg\" class=\"img img-responsive\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- /.yamm-content -->\n            </li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown yamm-fw\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\">Shop\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"yamm-content\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <ul class=\"list-inline text-center\">\n                      <li *ngFor=\"let item of shopMenu\" style=\"margin: 0 15px\">\n                        <a [routerLink]=\"['/category', 'shop', item._id]\">{{item.name}}</a>\n                      </li>\n                    </ul>\n                  </div>\n\n                </div>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"col-sm-3\">\n                      <div class=\"banner\">\n                        <a href=\"#\">\n                          <img src=\"./assets/img/bg1.jpg\" class=\"img img-responsive\" alt=\"\">\n                        </a>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div class=\"banner\">\n                        <a href=\"#\">\n                          <img src=\"./assets/img/bg1.jpg\" style=\"height:185px\" class=\"img img-responsive\" alt=\"\">\n                        </a>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div class=\"banner\">\n                        <a href=\"#\">\n                          <img src=\"./assets/img/bg2.jpg\" style=\"height:185px\" class=\"img img-responsive\" alt=\"\">\n                        </a>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div class=\"banner\">\n                        <a href=\"#\">\n                          <img src=\"./assets/img/bg2.jpg\" style=\"height:185px\" class=\"img img-responsive\" alt=\"\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n              <!-- /.yamm-content -->\n            </li>\n          </ul>\n        </li>\n\n        <!-- <li class=\"dropdown yamm-fw\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\">Sale\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"yamm-content\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <ul class=\"list-inline text-center\">\n                      <li *ngFor=\"let item of saleMenu\" style=\"margin: 0 15px\">\n                        <a [routerLink]=\"['/category', 'sale', item.name]\">{{item.name}}</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li> -->\n        <li>\n          <a class=\"dropdown-toggle\" [routerLink]=\"['/category/all']\">TẤT CẢ SẢN PHẨM</a>\n        </li>\n      </ul>\n\n    </div>\n    <!--/.nav-collapse -->\n\n    <div class=\"navbar-buttons\">\n\n      <div class=\"navbar-collapse collapse right animated cart\" id=\"basket-overview\">\n        <a routerLink=\"/basket\" class=\"btn btn-primary navbar-btn\">\n          <i class=\"fa fa-shopping-cart\"></i>\n          <span class=\"hidden-sm \">Giỏ hàng\n            <strong> {{countProductsInCart}}</strong>\n          </span>\n        </a>\n\n      </div>\n      <!--/.nav-collapse -->\n\n      <div class=\"navbar-collapse collapse right\" id=\"search-not-mobile\">\n        <button type=\"button\" class=\"btn navbar-btn btn-primary\" data-toggle=\"collapse\" data-target=\"#search\">\n          <span class=\"sr-only\">Toggle search</span>\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n      <div class=\"advanced-search\">\n        <a [routerLink]=\"['/search']\" class=\"navbar-collapse collapse right\">Tìm kiếm nâng cao</a>\n      </div>\n    </div>\n\n    <div class=\"collapse clearfix\" id=\"search\">\n\n      <form class=\"navbar-form\" role=\"search\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"customSelected\" [(ngModel)]=\"customSelected\" [typeahead]=\"allProduct\"\n            typeaheadOptionField=\"name\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadOptionsLimit]=\"6\">\n          <span class=\"input-group-btn\">\n            <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fa fa-search\"></i>\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <!--/.nav-collapse -->\n\n  </div>\n  <!-- /.container -->\n</div>\n<!-- /#navbar -->\n\n<!-- *** NAVBAR END *** -->\n\n\n<!--home Component-->\n<div id=\"all\">\n\n  <router-outlet></router-outlet>\n\n  <!-- *** FOOTER ***\n _________________________________________________________ -->\n  <!-- <div id=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6\">\n          <h4>Pages</h4>\n\n          <ul>\n            <li>\n              <a href=\"text.html\">About us</a>\n            </li>\n            <li>\n              <a href=\"text.html\">Terms and conditions</a>\n            </li>\n            <li>\n              <a href=\"faq.html\">FAQ</a>\n            </li>\n            <li>\n              <a routerLink=\"/contact\">Contact us</a>\n            </li>\n          </ul>\n\n          <hr>\n\n          <h4>User section</h4>\n\n          <ul>\n            <li>\n              <a href=\"#\" data-toggle=\"modal\" data-target=\"#login-modal\">Login</a>\n            </li>\n            <li>\n              <a href=\"register.html\">Regiter</a>\n            </li>\n          </ul>\n\n          <hr class=\"hidden-md hidden-lg hidden-sm\">\n\n        </div>\n       \n        <div class=\"col-md-3 col-sm-6\">\n\n          <h4>Top categories</h4>\n\n          <h5>Men</h5>\n\n          <ul>\n            <li>\n              <a href=\"category.html\">T-shirts</a>\n            </li>\n            <li>\n              <a href=\"category.html\">Shirts</a>\n            </li>\n            <li>\n              <a href=\"category.html\">Accessories</a>\n            </li>\n          </ul>\n\n          <h5>Ladies</h5>\n          <ul>\n            <li>\n              <a href=\"category.html\">T-shirts</a>\n            </li>\n            <li>\n              <a href=\"category.html\">Skirts</a>\n            </li>\n            <li>\n              <a href=\"category.html\">Pants</a>\n            </li>\n            <li>\n              <a href=\"category.html\">Accessories</a>\n            </li>\n          </ul>\n\n          <hr class=\"hidden-md hidden-lg\">\n\n        </div>\n       \n\n        <div class=\"col-md-3 col-sm-6\">\n\n          <h4>Where to find us</h4>\n\n          <p>\n            <strong>Obaju Ltd.</strong>\n            <br>13/25 New Avenue\n            <br>New Heaven\n            <br>45Y 73J\n            <br>England\n            <br>\n            <strong>Great Britain</strong>\n          </p>\n\n          <a href=\"\" (click)=\"goToContact()\">Go to contact page</a>\n\n          <hr class=\"hidden-md hidden-lg\">\n\n        </div>\n       \n\n\n\n        <div class=\"col-md-3 col-sm-6\">\n\n          <h4>Get the news</h4>\n\n          <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n\n          <form>\n            <div class=\"input-group\">\n\n              <input type=\"text\" class=\"form-control\">\n\n              <span class=\"input-group-btn\">\n\n                <button class=\"btn btn-default\" type=\"button\">Subscribe!</button>\n\n              </span>\n\n            </div>\n           \n          </form>\n\n          <hr>\n\n          <h4>Stay in touch</h4>\n\n          <p class=\"social\">\n            <a href=\"#\" class=\"facebook external\" data-animate-hover=\"shake\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n            <a href=\"#\" class=\"twitter external\" data-animate-hover=\"shake\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n            <a href=\"#\" class=\"instagram external\" data-animate-hover=\"shake\">\n              <i class=\"fa fa-instagram\"></i>\n            </a>\n            <a href=\"#\" class=\"gplus external\" data-animate-hover=\"shake\">\n              <i class=\"fa fa-google-plus\"></i>\n            </a>\n            <a href=\"#\" class=\"email external\" data-animate-hover=\"shake\">\n              <i class=\"fa fa-envelope\"></i>\n            </a>\n          </p>\n\n\n        </div>\n        \n\n      </div>\n     \n\n    </div>\n   \n  </div> -->\n  <!-- /#footer -->\n  <div id=\"footer\" class=\"text-center\">\n    <H3>Footer</H3>\n  </div>\n  <!-- *** FOOTER END *** -->\n\n\n\n\n  <!-- *** COPYRIGHT ***\n _________________________________________________________ -->\n  <!-- <div id=\"copyright\">\n    <div class=\"container\">\n      <div class=\"col-md-6\">\n        <p class=\"pull-left\">© 2015 Your name goes here.</p>\n\n      </div>\n      <div class=\"col-md-6\">\n        <p class=\"pull-right\">Template by\n          <a href=\"\">Bootstrapious</a> &\n          <a href=\"\">Fity</a>\n        </p>\n      </div>\n    </div>\n  </div> -->\n  <!-- *** COPYRIGHT END *** -->\n  <div id=\"copyright\" class=\"text-center\">\n    <H3>COPYRIGHT</H3>\n  </div>\n\n\n</div>\n<!-- /#all -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService, form, FB, productsService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.form = form;
        this.FB = FB;
        this.productsService = productsService;
        this.messageLogin = "";
        this.isLogin = false;
        this.username = "";
        this.expires = 30;
        this.brands = [];
        this.saleMenu = [];
        this.shopMenu = [];
        this.allProduct = [];
        this.newProducts = [];
        this.countProductsInCart = 0;
        this.isCheckCaptcha = false;
        FB.init({
            appId: "498084857228611",
            cookie: true,
            xfbml: true,
            version: "v2.10"
        });
        userService.dataFromRegisTerPage$.subscribe(function (res) { return _this.setLogin(); });
        // productsService.productDetail$.subscribe(res => this.productsInCart++);
        this.setLogin();
        productsService.getAll().subscribe(function (res) {
            _this.allProduct = res.data;
        });
    }
    AppComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load("auth2", function () {
            _this.auth2 = gapi.auth2.init({
                client_id: "461755935424-ue7n0vf2al071aiov9kto5ftugcoet36.apps.googleusercontent.com",
                cookiepolicy: "single_host_origin",
                scope: "profile email"
            });
            _this.attachSignin(document.getElementById("loginGoogle"));
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    AppComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            // console.log('Token || ' + googleUser.getAuthResponse().id_token);
            // console.log('ID: ' + profile.getId());
            // console.log('Name: ' + profile.getName());
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail());
            var id = profile.getId();
            //MY CODE HERE
            Cookies.set("token", googleUser.getAuthResponse().id_token, {
                expires: _this.expires,
                path: "/"
            });
            Cookies.set("username", profile.getName(), {
                expires: _this.expires,
                path: "/"
            });
            Cookies.set("idGG", id, { expires: _this.expires, path: "/" });
            _this.userService.setLogin(id);
            var data = {
                userID: profile.getId(),
                accessToken: googleUser.getAuthResponse().id_token
            };
            //call api to server
            _this.setLogin();
            _this.staticModal.hide();
            location.reload();
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.form.group({
            email: [
                "",
                [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(24)
                ]
            ],
            password: [
                "",
                [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(24)]
            ]
        });
        if (localStorage.getItem("tempCart"))
            this.countProductsInCart = JSON.parse(localStorage.getItem("tempCart")).length;
        this.productsService.productInCart$.subscribe(function (res) {
            _this.countProductsInCart = JSON.parse(localStorage.getItem("tempCart")).length;
            console.log(res);
        });
        this.productsService.getCategories().subscribe(function (res) {
            // console.log(res.data);
            _this.saleMenu = res.data;
            _this.shopMenu = res.data;
            // res.data.map(category => {
            //   this.saleMenu.push(category.name);
            //   this.shopMenu.push(category.name);
            // });
        });
        if (localStorage.getItem("tempCart"))
            this.countProductsInCart = JSON.parse(localStorage.getItem("tempCart")).length;
        this.productsService.productInCart$.subscribe(function (res) {
            _this.countProductsInCart = JSON.parse(localStorage.getItem("tempCart")).length;
        });
        this.productsService.getCategories().subscribe(function (res) {
            _this.saleMenu = res.data;
            _this.shopMenu = res.data;
        });
        this.productsService.getBrands().subscribe(function (res) {
            _this.brands = res.data;
        });
    };
    AppComponent.prototype.typeaheadOnSelect = function (e) {
        var _this = this;
        var product = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](this.allProduct, ["name", e.value]);
        this.router.navigate(["/detail", product._id]);
        this.customSelected = "";
        this.productsService.getBrands().subscribe(function (res) {
            // console.log(res.data);
            _this.brands = res.data;
            // res.data.map(brand => {
            //   this.brands.push(brand.name);
            // });
        });
    };
    // public typeaheadOnSelect(e: TypeaheadMatch): void {
    //   let product = _.find(this.allProduct, ["name", e.value]);
    //   this.router.navigate(["/detail", product._id]);
    //   this.customSelected = "";
    // }
    AppComponent.prototype.logIn = function () {
        var _this = this;
        var username = "";
        var value = this.loginForm.value;
        var data = {
            email: value.email,
            password: value.password,
            recaptcha: this.captcha
        };
        this.userService.logIn(data).subscribe(function (res) {
            if (res.success == true) {
                _this.userService.setLogin(true);
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
                        expires: _this.expires,
                        path: "/"
                    });
                    Cookies.set("id", res.data[0]._id, {
                        expires: _this.expires,
                        path: "/"
                    });
                    Cookies.set("token", res.data[0].token, {
                        expires: _this.expires,
                        path: "/"
                    });
                    _this.setLogin();
                    _this.loginForm.reset();
                    _this.staticModal.hide();
                    location.reload();
                }
            }
            else
                _this.messageLogin = res.error;
        });
    };
    AppComponent.prototype.goToContact = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(["/contact"]);
        event.preventDefault();
    };
    AppComponent.prototype.loginFB = function () {
        var _this = this;
        var loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: "public_profile,user_friends,email"
        };
        this.FB.login(loginOptions)
            .then(function (res) {
            _this.getProfileFB();
            _this.userService.setLogin(res.authResponse.userID);
            Cookies.set("token", res.authResponse.accessToken, {
                expires: _this.expires,
                path: "/"
            });
            Cookies.set("idFB", res.authResponse.userID, {
                expires: _this.expires,
                path: "/"
            });
            var data = {
                userID: res.authResponse.userID,
                accessToken: res.authResponse.accessToken
            };
            // goi API loginFB gui 'data' len server
            _this.staticModal.hide();
            //make sure that user can't go to Register page when logined, so If api response 200 -> location.reload()
            // setTimeout(function () { location.reload(); }, 400);
            setTimeout(function () {
                location.reload();
            }, 400);
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        //logout with FB
        this.FB.getLoginStatus().then(function (response) {
            if (response && response.status === "connected") {
                _this.FB.logout().then(function (res) {
                    _this.userService.setLogin("");
                    _this.removeCookies();
                });
            }
        });
        //logout with Google
        if (Cookies.get("idGG")) {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function (res) {
                _this.userService.setLogin("");
                _this.removeCookies();
            });
        }
        else {
            this.userService.setLogin("");
            this.removeCookies();
        }
    };
    AppComponent.prototype.getProfileFB = function () {
        var _this = this;
        this.FB.getLoginStatus().then(function (res) {
            if (res.status === "connected") {
                _this.FB.api("/me")
                    .then(function (res) {
                    Cookies.set("username", res.name, {
                        expires: _this.expires,
                        path: "/"
                    });
                    _this.username = res.name;
                    _this.isLogin = true;
                    _this.userService.sendDataUser(_this.isLogin);
                })
                    .catch(_this.handleError);
            }
        });
    };
    AppComponent.prototype.handleError = function (error) {
        console.error("Error processing action", error);
    };
    AppComponent.prototype.setLogin = function () {
        if (Cookies.get("token")) {
            this.username = Cookies.get("username");
            this.isLogin = true;
            this.userService.sendDataUser(this.isLogin);
        }
        else {
            this.isLogin = false;
            this.userService.sendDataUser(this.isLogin);
        }
    };
    AppComponent.prototype.removeCookies = function () {
        Cookies.get("username") && Cookies.remove("username", { path: "/" });
        Cookies.get("token") && Cookies.remove("token", { path: "/" });
        Cookies.get("idGG") && Cookies.remove("idGG", { path: "/" });
        Cookies.get("idFB") && Cookies.remove("idFB", { path: "/" });
        Cookies.get("id") && Cookies.remove("id", { path: "/" });
        this.setLogin();
    };
    AppComponent.prototype.resolved = function (captchaResponse) {
        if (captchaResponse) {
            this.isCheckCaptcha = true;
            return (this.captcha = captchaResponse);
        }
        else {
            this.isCheckCaptcha = false;
            return (this.captcha = captchaResponse);
        }
    };
    AppComponent.prototype.searchSimple = function (searchStr) {
        console.log(searchStr);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("staticModal"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
    ], AppComponent.prototype, "staticModal", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["b" /* FacebookService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_products_service__["a" /* ProductsService */]) === "function" && _f || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_pagination_service__ = __webpack_require__("../../../../../src/app/_services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_detail_detail_component__ = __webpack_require__("../../../../../src/app/components/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_basket_basket_component__ = __webpack_require__("../../../../../src/app/components/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_customer_account_customer_account_component__ = __webpack_require__("../../../../../src/app/components/customer-account/customer-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_checkout1_checkout1_component__ = __webpack_require__("../../../../../src/app/components/checkout1/checkout1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_moment_from_now_pipe__ = __webpack_require__("../../../../../src/app/pipes/moment-from-now.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_wish_list_wish_list_component__ = __webpack_require__("../../../../../src/app/components/wish-list/wish-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_checkout_success_checkout_success_component__ = __webpack_require__("../../../../../src/app/components/checkout-success/checkout-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guards_register_guard__ = __webpack_require__("../../../../../src/app/_guards/register.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_safehtml_pipe__ = __webpack_require__("../../../../../src/app/pipes/safehtml.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__guards_checkout_guard__ = __webpack_require__("../../../../../src/app/_guards/checkout.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var appRoutes = [
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] },
    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_16__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "detail/:id", component: __WEBPACK_IMPORTED_MODULE_17__components_detail_detail_component__["a" /* DetailComponent */] },
    { path: "basket", component: __WEBPACK_IMPORTED_MODULE_19__components_basket_basket_component__["a" /* BasketComponent */] },
    {
        path: "account",
        component: __WEBPACK_IMPORTED_MODULE_21__components_customer_account_customer_account_component__["a" /* CustomerAccountComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: "wishlist", component: __WEBPACK_IMPORTED_MODULE_26__components_wish_list_wish_list_component__["a" /* WishListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "checkout", component: __WEBPACK_IMPORTED_MODULE_22__components_checkout1_checkout1_component__["a" /* Checkout1Component */] },
    { path: "checkout/success", component: __WEBPACK_IMPORTED_MODULE_30__components_checkout_success_checkout_success_component__["a" /* CheckoutSuccessComponent */] },
    { path: "category/all", component: __WEBPACK_IMPORTED_MODULE_23__components_category_category_component__["a" /* CategoryComponent */] },
    { path: "search", component: __WEBPACK_IMPORTED_MODULE_29__components_search_search_component__["a" /* SearchComponent */] },
    {
        path: "category/:type/:kind",
        component: __WEBPACK_IMPORTED_MODULE_23__components_category_category_component__["a" /* CategoryComponent */]
        // children: [
        //   { path: '/:type/:kind', component: CategoryComponent },
        // ]
    },
    // canActivate: [AuthGuard]
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_basket_basket_component__["a" /* BasketComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_customer_account_customer_account_component__["a" /* CustomerAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_checkout1_checkout1_component__["a" /* Checkout1Component */],
                __WEBPACK_IMPORTED_MODULE_23__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_moment_from_now_pipe__["a" /* MomentFromNowPipe */],
                __WEBPACK_IMPORTED_MODULE_26__components_wish_list_wish_list_component__["a" /* WishListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_checkout_success_checkout_success_component__["a" /* CheckoutSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_safehtml_pipe__["a" /* SafeHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes
                // { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["d" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["c" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["b" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG"
                }),
                __WEBPACK_IMPORTED_MODULE_25_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_27_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__["RecaptchaModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__services_pagination_service__["a" /* PaginationService */],
                __WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_33__guards_checkout_guard__["a" /* CheckoutGuard */],
                __WEBPACK_IMPORTED_MODULE_31__guards_register_guard__["a" /* RegisterGuard */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__services_pagination_service__["a" /* PaginationService */],
                __WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__["RECAPTCHA_LANGUAGE"],
                    useValue: "en" // use French language
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/basket/basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>Shopping cart</li>\n      </ul>\n    </div>\n\n    <div class=\"col-md-9\" id=\"basket\">\n\n      <div class=\"box\">\n\n        <form method=\"post\" action=\"checkout.html\">\n\n          <h1>Shopping cart</h1>\n          <p class=\"text-muted\">Bạn đã có\n            <b>{{countProducts}}</b> sản phẩm trong giỏ hàng.</p>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th colspan=\"2\">Product</th>\n                  <th style=\"text-align: center\"> Quantity</th>\n                  <th>Unit price</th>\n                  <th>Discount</th>\n                  <th colspan=\"2\">Total</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let item of products, let i = index\">\n                <tr>\n                  <td>\n                    <a href=\"#\">\n                      <img src=\"{{item.mainImage}}\" alt=\"{{item.name}}\">\n                    </a>\n                  </td>\n                  <td style=\"width:30%\">\n                    <a>{{item.name}}</a>\n                  </td>\n                  <td>\n                    <!-- <input type=\"number\" name=\"quanlity\" [(ngModel)]=\"item.qty\" class=\"form-control\"> -->\n                    <p style=\"text-align: center\">{{item.qty}}</p>\n                  </td>\n                  <td>{{item.price | number}} VND</td>\n                  <td>0.00</td>\n                  <td>{{item.price * item.qty | number}} VND</td>\n                  <td>\n                    <a (click)=\"deleteProduct(i)\">\n                      <i class=\"fa fa-trash-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th colspan=\"5\">Total</th>\n                  <th colspan=\"2\">{{total | number}} VND</th>\n                </tr>\n              </tfoot>\n            </table>\n\n          </div>\n          <!-- /.table-responsive -->\n\n          <div class=\"box-footer\">\n            <div class=\"pull-left\">\n              <a href=\"category.html\" class=\"btn btn-default\">\n                <i class=\"fa fa-chevron-left\"></i> Continue shopping</a>\n            </div>\n            <div class=\"pull-right\">\n              <!-- <button id=\"updateBasket\" class=\"btn btn-default\" (click)=\"updateBasket()\">\n                <i class=\"fa fa-refresh\"></i> Update basket</button> -->\n              <button (click)=\"checkout()\" type=\"button\" class=\"btn btn-primary\" [disabled]=\"!userID\">Thanh toán\n                <i class=\"fa fa-chevron-right\"></i>\n              </button>\n              <p *ngIf=\"!userID\" style=\"color:red\">Bạn cần đăng nhập để thanh toán!!!</p>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n      <!-- /.box -->\n\n\n      <div class=\"row same-height-row\">\n        <!-- <div class=\"col-md-3 col-sm-6\">\n          <div class=\"box same-height\">\n            <h3>You may also like these products</h3>\n          </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"product same-height\">\n            <div class=\"flip-container\">\n              <div class=\"flipper\">\n                <div class=\"front\">\n                  <a href=\"detail.html\">\n                    <img src=\"./assets/img/product2.jpg\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n                <div class=\"back\">\n                  <a href=\"detail.html\">\n                    <img src=\"./assets/img/product2_2.jpg\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n              </div>\n            </div>\n            <a href=\"detail.html\" class=\"invisible\">\n              <img src=\"./assets/img/product2.jpg\" alt=\"\" class=\"img-responsive\">\n            </a>\n            <div class=\"text\">\n              <h3>Fur coat</h3>\n              <p class=\"price\">$143</p>\n            </div>\n          </div>\n         \n        </div>\n\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"product same-height\">\n            <div class=\"flip-container\">\n              <div class=\"flipper\">\n                <div class=\"front\">\n                  <a href=\"detail.html\">\n                    <img src=\"./assets/img/product1.jpg\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n                <div class=\"back\">\n                  <a href=\"detail.html\">\n                    <img src=\"./assets/img/product1_2.jpg\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n              </div>\n            </div>\n            <a href=\"detail.html\" class=\"invisible\">\n              <img src=\"./assets/img/product1.jpg\" alt=\"\" class=\"img-responsive\">\n            </a>\n            <div class=\"text\">\n              <h3>Fur coat</h3>\n              <p class=\"price\">$143</p>\n            </div>\n         \n        </div>\n\n\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"product same-height\">\n            <div class=\"flip-container\">\n              <div class=\"flipper\">\n                <div class=\"front\">\n                  <a href=\"detail.html\">\n                    <img src=\"./assets/img/product3.jpg\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n                <div class=\"back\">\n                  <a href=\"detail.html\">\n                    <img src=\"./assets/img/product3_2.jpg\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n              </div>\n            </div>\n            <a href=\"detail.html\" class=\"invisible\">\n              <img src=\"./assets/img/product3.jpg\" alt=\"\" class=\"img-responsive\">\n            </a>\n            <div class=\"text\">\n              <h3>Fur coat</h3>\n              <p class=\"price\">$143</p>\n\n            </div>\n          </div>\n         \n        </div> -->\n\n      </div>\n\n\n    </div>\n    <!-- /.col-md-9 -->\n\n    <div class=\"col-md-3\">\n      <!-- <div class=\"box\" id=\"order-summary\">\n        <div class=\"box-header\">\n          <h3>Order summary</h3>\n        </div>\n        <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>Order subtotal</td>\n                <th>$446.00</th>\n              </tr>\n              <tr>\n                <td>Shipping and handling</td>\n                <th>$10.00</th>\n              </tr>\n              <tr>\n                <td>Tax</td>\n                <th>$0.00</th>\n              </tr>\n              <tr class=\"total\">\n                <td>Total</td>\n                <th>$456.00</th>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div> -->\n\n\n      <!-- <div class=\"box\">\n        <div class=\"box-header\">\n          <h4>Coupon code</h4>\n        </div>\n        <p class=\"text-muted\">If you have a coupon code, please enter it in the box below.</p>\n        <form>\n          <div class=\"input-group\">\n\n            <input type=\"text\" class=\"form-control\">\n\n            <span class=\"input-group-btn\">\n\n              <button class=\"btn btn-primary\" type=\"button\">\n                <i class=\"fa fa-gift\"></i>\n              </button>\n\n            </span>\n          </div>\n        </form>\n      </div> -->\n\n    </div>\n    <!-- /.col-md-3 -->\n\n  </div>\n  <!-- /.container -->\n</div>\n<!-- /#content -->"

/***/ }),

/***/ "../../../../../src/app/components/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import Rx from 'rxjs/Rx';




var BasketComponent = /** @class */ (function () {
    function BasketComponent(router, productsService, userService) {
        var _this = this;
        this.router = router;
        this.productsService = productsService;
        this.userService = userService;
        this.quanlity = 1;
        this.products = [];
        this.userID = "";
        this.total = 0;
        // isLogin:boolean;
        this.countProducts = 0;
        this.product = {
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
        userService.isLogin$.subscribe(function (res) {
            _this.userID = res;
        });
    }
    BasketComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            if (this.products)
                this.countProducts = this.products.length;
            __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.products, function (res) { return _this.total += (res.price * res.qty); });
        }
    };
    BasketComponent.prototype.ngAfterViewInit = function () { };
    BasketComponent.prototype.checkout = function () {
        this.productsService.setTempCart(this.products);
        this.router.navigate(["/checkout"]);
    };
    BasketComponent.prototype.getUserID = function () {
        if (Cookies.get("id"))
            this.userID = Cookies.get("id");
        else if (Cookies.get("idGG"))
            this.userID = Cookies.get("idGG");
        else if (Cookies.get("idFB"))
            this.userID = Cookies.get("idFB");
        return this.userID;
    };
    BasketComponent.prototype.deleteProduct = function (index) {
        this.total -= this.products[index].price * this.products[index].qty;
        this.products.splice(index, 1);
        if (this.products)
            this.countProducts = this.products.length;
        localStorage.setItem("tempCart", JSON.stringify(this.products));
    };
    BasketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-basket",
            template: __webpack_require__("../../../../../src/app/components/basket/basket.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/basket/basket.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], BasketComponent);
    return BasketComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"container\">\n\n        <!-- <div class=\"col-md-12\">\n            <ul class=\"breadcrumb\">\n                <li>\n                    <a href=\"#\">Home</a>\n                </li>\n                <li>{{type}}</li>\n            </ul>\n        </div> -->\n\n        <!-- <div class=\"col-md-3\"> -->\n        <!-- <div class=\"panel panel-default sidebar-menu\">\n\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Categories</h3>\n                </div>\n\n                <div class=\"panel-body\">\n                    <ul class=\"nav nav-pills nav-stacked category-menu\">\n                        <li>\n                            <a href=\"category.html\">Men\n                                <span class=\"badge pull-right\">42</span>\n                            </a>\n                            <ul>\n                                <li>\n                                    <a href=\"category.html\">T-shirts</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Shirts</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Pants</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Accessories</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"active\">\n                            <a href=\"category.html\">Ladies\n                                <span class=\"badge pull-right\">123</span>\n                            </a>\n                            <ul>\n                                <li>\n                                    <a href=\"category.html\">T-shirts</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Skirts</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Pants</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Accessories</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <a href=\"category.html\">Kids\n                                <span class=\"badge pull-right\">11</span>\n                            </a>\n                            <ul>\n                                <li>\n                                    <a href=\"category.html\">T-shirts</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Skirts</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Pants</a>\n                                </li>\n                                <li>\n                                    <a href=\"category.html\">Accessories</a>\n                                </li>\n                            </ul>\n                        </li>\n\n                    </ul>\n\n                </div>\n            </div>\n\n            <div class=\"panel panel-default sidebar-menu\">\n\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Brands\n                        <a class=\"btn btn-xs btn-danger pull-right\" href=\"#\">\n                            <i class=\"fa fa-times-circle\"></i> Clear</a>\n                    </h3>\n                </div>\n\n                <div class=\"panel-body\">\n\n                    <form>\n                        <div class=\"form-group\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">Armani (10)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">Versace (12)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">Carlo Bruni (15)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">Jack Honey (14)\n                                </label>\n                            </div>\n                        </div>\n\n                        <button class=\"btn btn-default btn-sm btn-primary\">\n                            <i class=\"fa fa-pencil\"></i> Apply</button>\n\n                    </form>\n\n                </div>\n            </div>\n\n            <div class=\"panel panel-default sidebar-menu\">\n\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Colours\n                        <a class=\"btn btn-xs btn-danger pull-right\" href=\"#\">\n                            <i class=\"fa fa-times-circle\"></i> Clear</a>\n                    </h3>\n                </div>\n\n                <div class=\"panel-body\">\n\n                    <form>\n                        <div class=\"form-group\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">\n                                    <span class=\"colour white\"></span> White (14)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">\n                                    <span class=\"colour blue\"></span> Blue (10)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">\n                                    <span class=\"colour green\"></span> Green (20)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">\n                                    <span class=\"colour yellow\"></span> Yellow (13)\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\">\n                                    <span class=\"colour red\"></span> Red (10)\n                                </label>\n                            </div>\n                        </div>\n\n                        <button class=\"btn btn-default btn-sm btn-primary\">\n                            <i class=\"fa fa-pencil\"></i> Apply</button>\n\n                    </form>\n\n                </div>\n            </div>\n\n            <div class=\"banner\">\n                <a href=\"#\">\n                    <img src=\"./assets/img/banner.jpg\" alt=\"sales 2014\" class=\"img-responsive\">\n                </a>\n            </div> -->\n        <!-- </div> -->\n\n        <div class=\"col-md-12\">\n            <div class=\"box\">\n                <h2>{{kind}}</h2>\n            </div>\n\n            <div class=\"box info-bar\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-4 products-showing\">\n                        Showing\n                        <strong>{{currentProducts}}</strong> of\n                        <strong>{{allProducts}}</strong> products\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-8  products-number-sort\">\n                        <div class=\"row\">\n                            <form class=\"form-inline\">\n                                <div class=\"col-md-6 col-sm-6\">\n                                    <div class=\"products-number\">\n\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6\">\n                                    <div class=\"products-sort-by\">\n                                        <strong>Sort by</strong>\n                                        <select name=\"sort-by\" class=\"form-control\" (change)=\"sortBy($event)\">\n                                            <option>Price</option>\n                                            <option>Name</option>\n                                            <option selected>Choose</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row products\">\n\n                <div class=\"col-md-3 col-sm-6\" *ngFor=\"let product of allProduct\">\n                    <div class=\"product\">\n                        <div class=\"flip-container\">\n                            <div class=\"flipper\">\n                                <div class=\"front\">\n                                    <a href=\"detail.html\">\n                                        <img src=\"{{product.mainImage}}\" alt=\"\" style=\"height:250px\" class=\"img-responsive\" align=\"middle\">\n                                    </a>\n                                </div>\n                                <div class=\"back\">\n                                    <a href=\"detail.html\">\n                                        <img src=\"{{product.mainImage}}\" alt=\"\" style=\"height:250px\" class=\"img-responsive\" align=\"middle\">\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <a [routerLink]=\"['/detail', product._id]\" class=\"invisible\">\n                            <img src=\"{{product.mainImage}}\" style=\"height:250px\" alt=\"\" class=\"img-responsive\" align=\"middle\">\n                        </a>\n                        <div class=\"text\">\n                            <h3>\n                                <a [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n                            </h3>\n                            <p class=\"brand\">{{product.brand.name}}</p>\n                            <p class=\"buttons\" *ngIf=\"product.sale > 0\">\n                                <del class=\"price\" style=\"margin-right:4px\">{{product.price | number}} VND </del>\n                                <span class=\"price-sale\">{{(100 -product.sale)*product.price/100 | number}} VND</span>\n                            </p>\n                            <p class=\"buttons\" *ngIf=\"product.sale === 0\">\n                                <span class=\"price\">{{product.price | number}} VND</span>\n                            </p>\n                            <a class=\"btn btn-primary\" style=\"display:block; margin: 0 auto 10px auto\" [routerLink]=\"['/detail', product._id]\">Chi tiết</a>\n                        </div>\n                        <!-- /.text -->\n                        <div class=\"ribbon sale\" *ngIf=\"product.sale > 0\">\n                            <div class=\"theribbon\">{{product.sale}}%</div>\n                            <div class=\"ribbon-background\"></div>\n                        </div>\n                        <!-- /.ribbon -->\n\n                        <div class=\"ribbon new\" *ngIf=\"product.new\">\n                            <div class=\"theribbon\">NEW</div>\n                            <div class=\"ribbon-background\"></div>\n                        </div>\n                        <!-- /.ribbon -->\n                    </div>\n                    <!-- /.product -->\n                </div>\n\n\n\n                <div class=\"pages col-md-12\">\n\n                    <div>\n                        <ul *ngIf=\"pagination.length > 0\" class=\"pagination\">\n                            <li *ngFor=\"let page of pagination\" [ngClass]=\"{active:currentPage === page}\">\n                                <a (click)=\"setPage(page)\">{{page}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n\n            </div>\n            <!-- /.col-md-9 -->\n        </div>\n        <!-- /.container -->\n    </div>\n    <!-- /#content -->"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pagination_service__ = __webpack_require__("../../../../../src/app/_services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(pagerService, activatedRoute, productsService) {
        var _this = this;
        this.pagerService = pagerService;
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.allProduct = [];
        this.pager = {};
        this.productsForOnePage = [];
        this.filterProducts = [];
        this.kind = "";
        this.type = "";
        this.pagination = [];
        // productsService.getAll().subscribe(res => {
        //   this.allProduct = res.data;
        //   _.map(this.allProduct, res => { res.price = parseFloat(res.price); res.sale = parseFloat(res.sale); });
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.type = params.get("type") || "Tất cả sản phẩm";
            _this.kind = params.get("kind") || "Tất cả sản phẩm";
            if (_this.type === "shop") {
                productsService.getCategory(_this.kind).subscribe(function (res) {
                    _this.currentPage = Number(res.currentPage);
                    _this.currentProducts = Number(res.data.length);
                    _this.allProducts = Number(res.total);
                    _this.allProduct = res.data;
                    for (var i = 1; i <= res.totalPages; i++) {
                        _this.pagination.push(i);
                    }
                });
            }
            if (_this.type === "brands") {
                productsService.getBrandProducts(_this.kind).subscribe(function (res) {
                    _this.currentPage = Number(res.currentPage);
                    _this.currentProducts = Number(res.data.length);
                    _this.allProducts = Number(res.total);
                    _this.allProduct = res.data;
                    for (var i = 1; i <= res.totalPages; i++) {
                        _this.pagination.push(i);
                    }
                });
            }
            if (_this.type === "Tất cả sản phẩm" || _this.kind === "Tất cả sản phẩm") {
                productsService.getAll().subscribe(function (res) {
                    _this.currentPage = Number(res.currentPage);
                    _this.currentProducts = Number(res.data.length);
                    _this.allProducts = Number(res.total);
                    console.log(typeof _this.currentPage);
                    _this.allProduct = res.data;
                    for (var i = 1; i <= res.totalPages; i++) {
                        _this.pagination.push(i);
                    }
                });
            }
        });
        //     this.filterProducts = [];
        //     if (this.type === 'brands') {
        //       // _.map(this.allProduct, (product) => {
        //       //   if (product.brand === this.kind) this.filterProducts.push(product);
        //       // });
        //       this.filterProducts = _.filter(this.allProduct, ['brand', this.kind])
        //     }
        //     else if (this.type === 'shop') {
        //       // _.map(this.allProduct, (product) => {
        //       //   if (product.category === this.kind) this.filterProducts.push(product);
        //       // });
        //       this.filterProducts = _.filter(this.allProduct, ['category', this.kind])
        //     }
        //     else if (this.type === 'sale') {
        //       _.map(this.allProduct, (product) => {
        //         if (product.category === this.kind && product.sale > 0) this.filterProducts.push(product);
        //       });
        //     }
        //     else this.filterProducts = this.allProduct;
        //   });
        // }
        // );
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent.prototype.sortBy = function (event) {
        var value = event.target.value;
        if (value === "Name") {
            this.allProduct = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](this.productsForOnePage, ["name"]);
        }
        if (value === "Price") {
            this.allProduct = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](this.productsForOnePage, ["price"]);
        }
    };
    // setPage(page: number) {
    //   if (page < 1) {
    //     return;
    //   }
    //   this.pager = this.pagerService.getPager(this.allProduct.length, page);
    //   this.productsForOnePage = this.allProduct.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // }
    CategoryComponent.prototype.setPage = function (page) {
        var _this = this;
        this.currentPage = page;
        this.allProduct = [];
        this.productsService.getProductsPage(page).subscribe(function (res) {
            _this.allProduct = res.data;
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-category",
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_pagination_service__["a" /* PaginationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pagination_service__["a" /* PaginationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */]) === "function" && _c || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/checkout-success/checkout-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/checkout-success/checkout-success.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>Checkout - Address</li>\n      </ul>\n    </div>\n\n    <div class=\"col-md-9\" id=\"checkout\">\n\n      <div class=\"box\" *ngIf=\"_checkout1\">\n        <form #f=\"ngForm\" (ngSubmit)=\"checkout1()\" [formGroup]=\"checkoutForm\">\n          <h1>Checkout</h1>\n          <ul class=\"nav nav-pills nav-justified\">\n            <li class=\"active\">\n              <a href=\"#\">\n                <i class=\"fa fa-map-marker\"></i>\n                <br>Address</a>\n            </li>\n            <li class=\"disabled\">\n              <a href=\"#\">\n                <i class=\"fa fa-eye\"></i>\n                <br>Order Review</a>\n            </li>\n          </ul>\n\n          <div class=\"content\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"firstname\">Họ tên</label>\n                  <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"name\" name=\"name\">\n                  <div *ngIf=\"checkoutForm.get('name').errors && (checkoutForm.get('name').dirty || checkoutForm.get('name').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('name').errors.required \" class=\"warning\">*Bắt buộc</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"firstname\">Email</label>\n                  <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" name=\"email\">\n                  <div *ngIf=\"checkoutForm.get('email').errors && (checkoutForm.get('email').dirty || checkoutForm.get('email').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('email').errors.email\" class=\"warning\">*Email không hợp lệ</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /.row -->\n\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"company\">Điện thoại</label>\n                  <input type=\"text\" class=\"form-control\" id=\"company\" formControlName=\"phone\" pattern=\"[0+][0-9]{9}\" name=\"phone\">\n                  <div *ngIf=\"checkoutForm.get('phone').errors && (checkoutForm.get('phone').dirty || checkoutForm.get('phone').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('phone').errors.required \" class=\"warning\">*Bắt buộc</div>\n                    <div [hidden]=\"!checkoutForm.get('phone').errors.pattern \" class=\"warning\">*Số điện thoại không hợp lệ</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"street\">Địa chỉ</label>\n                  <input type=\"text\" class=\"form-control\" id=\"street\" formControlName=\"address\" name=\"address\">\n                  <div *ngIf=\"checkoutForm.get('address').errors && (checkoutForm.get('address').dirty || checkoutForm.get('address').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('address').errors.required || checkoutForm.get('address').value != '' \" class=\"warning\">*Bắt buộc</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /.row -->\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"phone\">\n                    <b>Pương thức thanh toán</b>\n                  </label>\n\n                </div>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"paymentMethod\" formControlName=\"paymentMethod\" value=\"paypal\">Paypal</label>\n                  <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"paymentMethod\" formControlName=\"paymentMethod\" value=\"cash\">Thanh toán khi nhận hàng</label>\n                </div>\n              </div>\n            </div>\n\n\n\n            <!-- /.row -->\n          </div>\n\n          <div class=\"box-footer\">\n            <div class=\"pull-left\">\n              <a [routerLink]=\"['/basket']\" class=\"btn btn-default\">\n                <i class=\"fa fa-chevron-left\"></i>Quay lại giỏ hàng</a>\n            </div>\n            <div class=\"pull-right\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkout1()\">Xác nhận\n                <i class=\"fa fa-chevron-right\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <!-- /.box 4-->\n      <div class=\"box\">\n        <form *ngIf=\"_checkout4\">\n          <h1>Checkout - Order review</h1>\n          <ul class=\"nav nav-pills nav-justified\">\n            <li>\n              <a href=\"checkout.html\">\n                <i class=\"fa fa-map-marker\"></i>\n                <br>Address</a>\n            </li>\n            <li class=\"active\">\n              <a href=\"#\">\n                <i class=\"fa fa-eye\"></i>\n                <br>Order Review</a>\n            </li>\n          </ul>\n\n          <div class=\"content\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th colspan=\"2\">Product</th>\n                    <th>Quantity</th>\n                    <th>Unit price</th>\n                    <th>Discount</th>\n                    <th>Total</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of products\">\n                    <td>\n                      <a>\n                        <img src=\"{{item.mainImage}}\" alt=\"White Blouse Armani\">\n                      </a>\n                    </td>\n                    <td style=\"width: 35%\">\n                      <a>{{item.name}}</a>\n                    </td>\n                    <td>1</td>\n                    <td *ngIf=\"item.sale == 0\">{{item.price | number}} VND</td>\n                    <td *ngIf=\"item.sale > 0\">{{item.price * (100 - item.sale) / 100 | number}} VND</td>\n                    <td>0.00 VND</td>\n                    <td>{{item.price | number}} VND</td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <th colspan=\"5\">Tổng cộng</th>\n                    <th>{{total | number}} VND</th>\n                  </tr>\n                </tfoot>\n              </table>\n\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.content -->\n        </form>\n      </div>\n      <!-- /.box -->\n    </div>\n    <!-- /.col-md-9 -->\n\n    <div class=\"col-md-3\">\n\n      <div class=\"box\" id=\"order-summary\">\n        <div class=\"box-header\">\n          <h3>Order summary</h3>\n        </div>\n        <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>Order subtotal</td>\n                <th>$0.00</th>\n              </tr>\n              <tr>\n                <td>Shipping and handling</td>\n                <th>$00.00</th>\n              </tr>\n              <tr>\n                <td>Tax</td>\n                <th>$0.00</th>\n              </tr>\n              <tr class=\"total\">\n                <td>Total</td>\n                <th>$0.000</th>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- /.col-md-3 -->\n\n  </div>\n  <!-- /.container -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/checkout-success/checkout-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CheckoutSuccessComponent = /** @class */ (function () {
    function CheckoutSuccessComponent(_renderer2, _document, router, userService, productsService, form, activatedRoute) {
        this._renderer2 = _renderer2;
        this._document = _document;
        this.router = router;
        this.userService = userService;
        this.productsService = productsService;
        this.form = form;
        this.activatedRoute = activatedRoute;
        this._checkout1 = false;
        this._checkout4 = true;
        this.products = [];
        this.total = 0;
    }
    CheckoutSuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = JSON.parse(localStorage.getItem("tempCart"));
        this.products && __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](this.products, function (res) { return (_this.total += +res.price); });
        console.log(this.checkoutForm.value);
        this.activatedRoute.queryParams.subscribe(function (params) {
            var PayerID = params["PayerID"];
            var paymentId = params["paymentId"];
            _this.userService
                .checkoutSuccess({ PayerID: PayerID, paymentId: paymentId, userID: _this.getUserId() })
                .subscribe(function (res) {
                localStorage.removeItem("tempCart");
            });
        });
    };
    CheckoutSuccessComponent.prototype.getUserId = function () {
        var userID;
        if (Cookies.get("id"))
            userID = Cookies.get("id");
        return userID;
    };
    CheckoutSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-checkout-success",
            template: __webpack_require__("../../../../../src/app/components/checkout-success/checkout-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/checkout-success/checkout-success.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
    ], CheckoutSuccessComponent);
    return CheckoutSuccessComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=checkout-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/checkout1/checkout1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warning {\n    color: #D9534F;\n    padding-top: 4px;\n    padding-left: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/checkout1/checkout1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>Checkout - Address</li>\n      </ul>\n    </div>\n\n    <div class=\"col-md-9\" id=\"checkout\">\n\n      <div class=\"box\" *ngIf=\"_checkout1\">\n        <form #f=\"ngForm\" (ngSubmit)=\"checkout1()\" [formGroup]=\"checkoutForm\">\n          <h1>Checkout</h1>\n          <ul class=\"nav nav-pills nav-justified\">\n            <li class=\"active\">\n              <a href=\"#\">\n                <i class=\"fa fa-map-marker\"></i>\n                <br>Address</a>\n            </li>\n            <li class=\"disabled\">\n              <a href=\"#\">\n                <i class=\"fa fa-eye\"></i>\n                <br>Order Review</a>\n            </li>\n          </ul>\n\n          <div class=\"content\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"firstname\">Họ tên</label>\n                  <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"name\" name=\"name\">\n                  <div *ngIf=\"checkoutForm.get('name').errors && (checkoutForm.get('name').dirty || checkoutForm.get('name').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('name').errors.required \" class=\"warning\">*Bắt buộc</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"firstname\">Email</label>\n                  <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" name=\"email\">\n                  <div *ngIf=\"checkoutForm.get('email').errors && (checkoutForm.get('email').dirty || checkoutForm.get('email').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('email').errors.email\" class=\"warning\">*Email không hợp lệ</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /.row -->\n\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"company\">Điện thoại</label>\n                  <input type=\"text\" class=\"form-control\" id=\"company\" formControlName=\"phone\" pattern=\"[0+][0-9]{9}\" name=\"phone\">\n                  <div *ngIf=\"checkoutForm.get('phone').errors && (checkoutForm.get('phone').dirty || checkoutForm.get('phone').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('phone').errors.required \" class=\"warning\">*Bắt buộc</div>\n                    <div [hidden]=\"!checkoutForm.get('phone').errors.pattern \" class=\"warning\">*Số điện thoại không hợp lệ</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"street\">Địa chỉ</label>\n                  <input type=\"text\" class=\"form-control\" id=\"street\" formControlName=\"address\" name=\"address\">\n                  <div *ngIf=\"checkoutForm.get('address').errors && (checkoutForm.get('address').dirty || checkoutForm.get('address').touched)\">\n                    <div [hidden]=\"!checkoutForm.get('address').errors.required || checkoutForm.get('address').value != '' \" class=\"warning\">*Bắt buộc</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /.row -->\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"phone\">\n                    <b>Pương thức thanh toán</b>\n                  </label>\n\n                </div>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"paymentMethod\" formControlName=\"paymentMethod\" value=\"paypal\">Paypal</label>\n                  <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"paymentMethod\" formControlName=\"paymentMethod\" value=\"cod\">Thanh toán khi nhận hàng</label>\n                </div>\n              </div>\n            </div>\n\n\n\n            <!-- /.row -->\n          </div>\n\n          <div class=\"box-footer\">\n            <div class=\"pull-left\">\n              <a [routerLink]=\"['/basket']\" class=\"btn btn-default\">\n                <i class=\"fa fa-chevron-left\"></i>Quay lại giỏ hàng</a>\n            </div>\n            <div class=\"pull-right\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkout1()\" [disabled]=\"!f.form.valid\">Xác nhận\n                <i class=\"fa fa-chevron-right \"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <!-- /.box 4-->\n      <div class=\"box \">\n        <form *ngIf=\"_checkout4 \">\n          <h1>Checkout - Order review</h1>\n          <ul class=\"nav nav-pills nav-justified \">\n            <li>\n              <a href=\"checkout.html\">\n                <i class=\"fa fa-map-marker\"></i>\n                <br>Address</a>\n            </li>\n            <li class=\"active \">\n              <a href=\"# \">\n                <i class=\"fa fa-eye \"></i>\n                <br>Order Review</a>\n            </li>\n          </ul>\n\n          <div class=\"content \">\n            <div class=\"table-responsive \">\n              <table class=\"table \">\n                <thead>\n                  <tr>\n                    <th colspan=\"2 \">Product</th>\n                    <th>Quantity</th>\n                    <th>Unit price</th>\n                    <th>Discount</th>\n                    <th>Total</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of products \">\n                    <td>\n                      <a>\n                        <img src=\"{{item.mainImage}} \" alt=\"White Blouse Armani \">\n                      </a>\n                    </td>\n                    <td style=\"width: 35% \">\n                      <a>{{item.name}}</a>\n                    </td>\n                    <td>1</td>\n                    <td *ngIf=\"item.sale==0 \">{{item.price | number}} VND</td>\n                    <td *ngIf=\"item.sale> 0\">{{item.price * (100 - item.sale) / 100 | number}} VND</td>\n                    <td>0.00 VND</td>\n                    <td>{{item.price | number}} VND</td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <th colspan=\"5\">Tổng cộng</th>\n                    <th>{{total | number}} VND</th>\n                  </tr>\n                </tfoot>\n              </table>\n\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.content -->\n        </form>\n      </div>\n      <!-- /.box -->\n    </div>\n    <!-- /.col-md-9 -->\n\n    <div class=\"col-md-3\">\n\n      <div class=\"box\" id=\"order-summary\">\n        <div class=\"box-header\">\n          <h3>Order summary</h3>\n        </div>\n        <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>Order subtotal</td>\n                <th>$0.00</th>\n              </tr>\n              <tr>\n                <td>Shipping and handling</td>\n                <th>$00.00</th>\n              </tr>\n              <tr>\n                <td>Tax</td>\n                <th>$0.00</th>\n              </tr>\n              <tr class=\"total\">\n                <td>Total</td>\n                <th>$0.000</th>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- /.col-md-3 -->\n\n  </div>\n  <!-- /.container -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/checkout1/checkout1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkout1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var Checkout1Component = /** @class */ (function () {
    function Checkout1Component(_renderer2, _document, router, userService, productsService, form, activatedRoute) {
        this._renderer2 = _renderer2;
        this._document = _document;
        this.router = router;
        this.userService = userService;
        this.productsService = productsService;
        this.form = form;
        this.activatedRoute = activatedRoute;
        this._checkout1 = true;
        this._checkout4 = false;
        // public card = false;
        this.products = [];
        this.total = 0;
    }
    Checkout1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.email = Cookies.get('email');
        this.userName = Cookies.get('username');
        this.checkoutForm = this.form.group({
            email: [
                this.email,
                [
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].email,
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(24)
                ]
            ],
            name: [
                this.userName,
                [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(24)]
            ],
            phone: [
                "",
                [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(24)]
            ],
            address: [
                "",
                [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(24)]
            ],
            paymentMethod: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required]]
        });
        this.products = JSON.parse(localStorage.getItem("tempCart"));
        this.products && __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](this.products, function (res) { return (_this.total += +res.price); });
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            var success = params["success"];
            if (success) {
                _this._checkout1 = false;
                _this._checkout4 = true;
                var PayerID = params["PayerID"];
                var paymentId = params["paymentId"];
                _this.userService
                    .checkoutSuccess({ PayerID: PayerID, paymentId: paymentId, userID: _this.getUserId() })
                    .subscribe(function (res) {
                    localStorage.removeItem("tempCart");
                });
            }
        });
    };
    Checkout1Component.prototype.goToPaypal = function (url) {
        this._document.location.href = url;
    };
    Checkout1Component.prototype.getUserId = function () {
        var userID;
        if (Cookies.get("id"))
            userID = Cookies.get("id");
        return userID;
    };
    Checkout1Component.prototype.checkout1 = function () {
        var _this = this;
        var items = [];
        this.products.map(function (product) {
            var item = {
                _id: product._id,
                quantity: 1
            };
            items.push(item);
        });
        var data = {
            bill: this.checkoutForm.value,
            userID: "5aae88cc9c6e191a5736f844",
            items: items,
            total: this.total
        };
        this.userService.checkout(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.goToPaypal(res.href);
            }
        });
    };
    Checkout1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-checkout1",
            template: __webpack_require__("../../../../../src/app/components/checkout1/checkout1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/checkout1/checkout1.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
    ], Checkout1Component);
    return Checkout1Component;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=checkout1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 400px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>Contact</li>\n      </ul>\n\n    </div>\n\n<!--    <div class=\"col-md-3\">\n       *** PAGES MENU ***\n _________________________________________________________ \n      <div class=\"panel panel-default sidebar-menu\">\n\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Pages</h3>\n        </div>\n\n        <div class=\"panel-body\">\n          <ul class=\"nav nav-pills nav-stacked\">\n            <li>\n              <a href=\"text.html\">Text page</a>\n            </li>\n            <li>\n              <a href=\"contact.html\">Contact page</a>\n            </li>\n            <li>\n              <a href=\"faq.html\">FAQ</a>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n      *** PAGES MENU END ***\n\n      <div class=\"banner\">\n        <a href=\"#\">\n          <img src=\"./assets/img/banner.jpg\" alt=\"sales 2014\" class=\"img-responsive\">\n        </a>\n      </div>\n    </div> -->\n\n    <div class=\"col-md-9\">\n\n\n      <div class=\"box\" id=\"contact\">\n        <h1>Contact</h1>\n\n        <p class=\"lead\">Are you curious about something? Do you have some kind of problem with our products?</p>\n        <p>Please feel free to contact us, our customer service center is working for you 24/7.</p>\n\n        <hr>\n\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <h3>\n              <i class=\"fa fa-map-marker\"></i> Address</h3>\n            <p>Khu phố 6, Phường Linh Trung\n              <br>Quận Thủ Đức\n              <br>Phường Linh Trung\n              <br>Tp. Hồ Chí Minh\n              <br>\n              <strong>Việt Nam</strong>\n            </p>\n          </div>\n          <!-- /.col-sm-4 -->\n          <div class=\"col-sm-4\">\n            <h3>\n              <i class=\"fa fa-phone\"></i> Call center</h3>\n            <p class=\"text-muted\">This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of\n              communication.\n            </p>\n            <p>\n              <strong>+33 555 444 333</strong>\n            </p>\n          </div>\n          <!-- /.col-sm-4 -->\n          <div class=\"col-sm-4\">\n            <h3>\n              <i class=\"fa fa-envelope\"></i> Electronic support</h3>\n            <p class=\"text-muted\">Please feel free to write an email to us or to use our electronic ticketing system.</p>\n            <ul>\n              <li>\n                <strong>\n                  <a href=\"mailto:\">info@fakeemail.com</a>\n                </strong>\n              </li>\n              <li>\n                <strong>\n                  <a href=\"#\">Ticketio</a>\n                </strong> - our ticketing support platform</li>\n            </ul>\n          </div>\n          <!-- /.col-sm-4 -->\n        </div>\n        <!-- /.row -->\n\n        <hr>\n\n        <div id=\"map\">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n          </agm-map>\n        </div>\n\n        <hr>\n        <h2>Contact form</h2>\n\n        <form>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"firstname\">Firstname</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstname\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"lastname\">Lastname</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastname\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" id=\"email\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"subject\">Subject</label>\n                <input type=\"text\" class=\"form-control\" id=\"subject\">\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"message\">Message</label>\n                <textarea id=\"message\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"col-sm-12 text-center\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                <i class=\"fa fa-envelope-o\"></i> Send message</button>\n\n            </div>\n          </div>\n          <!-- /.row -->\n        </form>\n\n\n      </div>\n\n\n    </div>\n    <!-- /.col-md-9 -->\n  </div>\n  <!-- /.container -->\n</div>\n<!-- /#content -->"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.lat = 10.87054;
        this.lng = 106.80322;
        this.zoom = 15;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer-account/customer-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer-account/customer-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n\n    <div id=\"content\">\n        <div class=\"container\">\n\n            <div class=\"col-md-12\">\n\n                <ul class=\"breadcrumb\">\n                    <li>\n                        <a href=\"#\">Home</a>\n                    </li>\n                    <li>My account</li>\n                </ul>\n\n            </div>\n\n            <div class=\"col-md-3\">\n                <!-- *** CUSTOMER MENU ***\n   _________________________________________________________ -->\n                <div class=\"panel panel-default sidebar-menu\">\n\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">Customer section</h3>\n                    </div>\n\n                    <div class=\"panel-body\">\n\n                        <ul class=\"nav nav-pills nav-stacked\">\n                            <li class=\"active\">\n                                <a href=\"customer-orders.html\">\n                                    <i class=\"fa fa-list\"></i> My orders</a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"['/wishlist']\">\n                                    <i class=\"fa fa-heart\"></i> My wishlist</a>\n                            </li>\n                            <li>\n                                <a href=\"customer-account.html\">\n                                    <i class=\"fa fa-user\"></i> My account</a>\n                            </li>\n                            <li>\n                                <a href=\"index.html\">\n                                    <i class=\"fa fa-sign-out\"></i> Logout</a>\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n                <!-- /.col-md-3 -->\n\n                <!-- *** CUSTOMER MENU END *** -->\n            </div>\n\n            <div class=\"col-md-9\">\n                <div class=\"box\">\n                    <h1>My account</h1>\n                    <p class=\"lead\">Change your personal details or your password here.</p>\n                    <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n\n                    <h3>Change password</h3>\n\n                    <form [formGroup]=\"passwordChangeForm\" #f=\"ngForm\" (ngSubmit)=\"changePasswd()\">\n                        <div class=\"row\">\n                            <!-- <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                          <label for=\"password_old\">Old password</label>\n                                          <input type=\"password\" class=\"form-control\" id=\"password_old\" formControlName=\"oldPasswd\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n                                      </div>\n                                  </div> -->\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"password_1\">New password</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"password_1\" formControlName=\"newPasswd\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"password_2\">Retype new password</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"password_2\" formControlName=\"retypeNewPasswd\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n                                </div>\n                            </div>\n                        </div>\n                        <p *ngIf=\"messageChangePasswd != ''\" style=\"color: red\">{{messageChangePasswd}}</p>\n                        <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG\"></re-captcha>\n                        <!-- /.row -->\n\n                        <div class=\"col-sm-12 text-center\">\n                            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(f.form.valid && isCheckCaptcha == true)\">\n                                <i class=\"fa fa-save\"></i> Save new password</button>\n                        </div>\n                    </form>\n\n                    <hr>\n\n                    <h3>Personal details</h3>\n                    <form #ff=\"ngForm\" [formGroup]=\"userInfoChangeForm\" (ngSubmit)=\"updateInfo()\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"firstname\">Firstname</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"firstName\" pattern=\"[A-Za-z]{4,}$\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"lastname\">Lastname</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastName\" pattern=\"[A-Za-z]{4,}$\">\n                                </div>\n                            </div>\n                        </div>\n                        <!-- /.row -->\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"phone\">Telephone</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" pattern=\"(0|2|9|)\\d{9}\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"email\">Email</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"email\" disabled>\n                                </div>\n                            </div>\n                            <div></div>\n                            <div class=\"col-sm-12 text-center\">\n                                <re-captcha (resolved)=\"resolvedUserInfo($event)\" siteKey=\"6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG\"></re-captcha>\n                                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(ff.form.valid && isCheckCaptchaUserInfo == true)\">\n                                    <i class=\"fa fa-save\"></i> Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n        </div>\n        <!-- /.container -->\n    </div>\n    <!-- /#content -->"

/***/ }),

/***/ "../../../../../src/app/components/customer-account/customer-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerAccountComponent = /** @class */ (function () {
    function CustomerAccountComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.messageChangePasswd = '';
        this.isCheckCaptcha = false;
        this.isCheckCaptchaUserInfo = false;
        this.captcha = '';
    }
    CustomerAccountComponent.prototype.ngOnInit = function () {
        this.passwordChangeForm = this.fb.group({
            // oldPasswd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
            newPasswd: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            retypeNewPasswd: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
        });
        this.userInfoChangeForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
        });
    };
    CustomerAccountComponent.prototype.changePasswd = function () {
        var _this = this;
        if (this.passwordChangeForm.value.newPasswd === this.passwordChangeForm.value.retypeNewPasswd) {
            var data = {
                userID: this.getUserID(),
                password: this.passwordChangeForm.value.newPasswd,
                cpassword: this.passwordChangeForm.value.retypeNewPasswd,
                recaptcha: this.captcha,
            };
            this.userService.changePasswd(data).subscribe(function (res) {
                if (res.success) {
                    alert(res.message);
                    location.reload();
                    _this.passwordChangeForm.reset();
                }
                else
                    alert(res.message);
            });
        }
        else
            this.messageChangePasswd = "Password not match!";
    };
    CustomerAccountComponent.prototype.resolved = function (captchaResponse) {
        if (captchaResponse) {
            this.isCheckCaptcha = true;
            return this.captcha = captchaResponse;
        }
        else {
            this.isCheckCaptcha = false;
            return this.captcha = captchaResponse;
        }
    };
    CustomerAccountComponent.prototype.getUserID = function () {
        var userID;
        if (Cookies.get('id'))
            userID = Cookies.get('id');
        else if (Cookies.get('idGG'))
            userID = Cookies.get('idGG');
        else if (Cookies.get('idFB'))
            userID = Cookies.get('idFB');
        return userID;
    };
    CustomerAccountComponent.prototype.updateInfo = function () {
        var _this = this;
        if (this.userInfoChangeForm.value) {
            var data = __WEBPACK_IMPORTED_MODULE_3_lodash__["pickBy"]({
                userID: this.getUserID(),
                firstName: this.userInfoChangeForm.value.firstName,
                lastName: this.userInfoChangeForm.value.lastName,
                phone: this.userInfoChangeForm.value.phone,
                recaptcha: this.captcha,
            }, __WEBPACK_IMPORTED_MODULE_3_lodash__["identity"]);
            this.userService.changeInfo(data).subscribe(function (res) {
                if (res.success) {
                    alert(res.message);
                    location.reload();
                    _this.userInfoChangeForm.reset();
                }
                else
                    alert(res.message);
            });
        }
    };
    CustomerAccountComponent.prototype.resolvedUserInfo = function (captchaResponse) {
        if (captchaResponse) {
            this.isCheckCaptchaUserInfo = true;
            return this.captcha = captchaResponse;
        }
        else {
            this.isCheckCaptchaUserInfo = false;
            return this.captcha = captchaResponse;
        }
    };
    CustomerAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-account',
            template: __webpack_require__("../../../../../src/app/components/customer-account/customer-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customer-account/customer-account.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
    ], CustomerAccountComponent);
    return CustomerAccountComponent;
    var _a, _b;
}());

//# sourceMappingURL=customer-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "rating {\n    font-size: large;\n    color: #4FBFA8;\n    margin-right: 10px;\n}\n\n.review {\n    background: white;\n}\n.rating-block {\n    background-color: #FAFAFA;\n    border: 1px solid #EFEFEF;\n    padding: 15px 15px 20px 15px;\n    border-radius: 3px;\n}\n.review-block {\n    background-color: #FAFAFA;\n    border: 1px solid #EFEFEF;\n    padding: 15px;\n    border-radius: 3px;\n    margin-bottom: 15px;\n}\n.btn-grey{\n    background-color:#D8D8D8;\n\tcolor:#FFF;\n}\n\n.bold{\n\tfont-weight:700;\n}\n.padding-bottom-7{\n\tpadding-bottom:7px;\n}\n\n\n.review-block-name{\n\tfont-size:12px;\n\tmargin:10px 0;\n}\n.review-block-date{\n\tfont-size:12px;\n}\n.review-block-rate{\n\tfont-size:13px;\n\tmargin-bottom:15px;\n}\n.review-block-title{\n\tfont-size:15px;\n\tfont-weight:700;\n\tmargin-bottom:10px;\n}\n.review-block-description{\n\tfont-size:13px;\n}\n\n.text-right {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>\n          <a href=\"#\">Ladies</a>\n        </li>\n        <li>\n          <a href=\"#\">Tops</a>\n        </li>\n        <li>White Blouse Armani</li>\n      </ul>\n\n    </div>\n\n\n\n    <div class=\"col-md-9\">\n\n      <div class=\"row\" id=\"productMain\">\n        <div class=\"col-sm-6\">\n          <div id=\"mainImage\">\n            <img src={{product.slides[0]}} alt=\"\" class=\"img-responsive\">\n          </div>\n\n          <div *ngIf=\"product.sale != '0'\" class=\"ribbon sale\">\n            <div class=\"theribbon\">{{product.sale }} %</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <!-- /.ribbon -->\n\n          <div class=\"ribbon new\" *ngIf=\"product.isNew\">\n            <div class=\"theribbon\">NEW</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <!-- /.ribbon -->\n\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"box\">\n            <h1 class=\"text-center\">{{product.name}}</h1>\n            <p class=\"goToDescription\">\n              <a href=\"#details\" class=\"scroll-to\">Scroll to product details, material & care and sizing</a>\n            </p>\n            <p style=\"text-align:center\">\n              <del style=\"margin-right:4px\" class=\"price\">{{product.price }} VND </del>\n              <span class=\"price-sale\">{{((100 - product.sale) * product.price/100) | number}} VND</span>\n            </p>\n\n            <p class=\"text-center buttons\">\n              <button class=\"btn btn-primary scrollTop\" (click)=\"addToCart()\">\n                <i class=\"fa fa-shopping-cart\"></i> Thanh toán</button>\n              <button (click)=\"addWishList()\" class=\"btn btn-default\" disabled>\n                <i class=\"fa fa-heart\"></i> Thêm vào WishList</button>\n            </p>\n\n\n          </div>\n\n          <div class=\"row\" id=\"thumbs\">\n            <div class=\"col-xs-4\">\n              <a href={{product.slides[0]}} class=\"thumb\">\n                <img src={{product.slides[0]}} alt=\"\" class=\"img-responsive\">\n              </a>\n            </div>\n            <div class=\"col-xs-4\">\n              <a href={{product.slides[0]}} class=\"thumb\">\n                <img src={{product.slides[0]}} alt=\"\" class=\"img-responsive\">\n              </a>\n            </div>\n            <div class=\"col-xs-4\">\n              <a href={{product.slides[0]}} class=\"thumb\">\n                <img src={{product.slides[0]}} alt=\"\" class=\"img-responsive\">\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div>\n        <tabset>\n          <tab heading=\"Mô tả\" id=\"tab1\">\n            <div class=\"box\" id=\"details\">\n              <div *ngIf=\"product.info\" [innerHTML]=\"product.info | safeHtml\">\n\n              </div>\n\n              <div *ngIf=\"!product.info\">\n                <p>\n                  <h4>Thông tin sản phẩm</h4>\n                  <p style=\"margin-left:5px\">{{product.description}}</p>\n                  <h4 *ngIf=\"product.ingerdients\">Đặc điểm</h4>\n                  <!-- <ul *ngIf=\"product.ingerdients\" >\n                    <li *ngFor=\"let item of product.ingerdients\">{{item}}</li>\n                  </ul> -->\n                  <p *ngIf=\"product.ingerdients\">{{product.ingerdients}}</p>\n                  <h4>Brands</h4>\n                  <ul>\n                    <li style=\"font-weight: 700; color: #41B39C\">{{product.brand | uppercase}}</li>\n                  </ul>\n                  <div *ngIf=\"product.howto\">\n                    <h4>Cách dùng</h4>\n                    <p style=\"margin-left:5px\">{{product.howto}}</p>\n                  </div>\n              </div>\n\n\n              <blockquote>\n                <p>\n                  <em>{{quote[0].quote}}</em>\n                </p>\n                <p class=\"pull-right\" style=\"font-weight:600\">\n                  <em>- {{quote[0].author}}</em>\n                </p>\n              </blockquote>\n\n              <hr>\n              <div class=\"social\">\n                <h4>Show it to your friends</h4>\n                <p>\n                  <a style=\"cursor: pointer\" class=\"external facebook\" data-animate-hover=\"pulse\" (click)=\"shareFB()\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"#\" class=\"external gplus\" data-animate-hover=\"pulse\">\n                    <i class=\"fa fa-google-plus\"></i>\n                  </a>\n                  <a href=\"#\" class=\"external twitter\" data-animate-hover=\"pulse\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"#\" class=\"email\" data-animate-hover=\"pulse\">\n                    <i class=\"fa fa-envelope\"></i>\n                  </a>\n                </p>\n                <p *ngIf=\"message\" style=\"color: red\">{{message}}</p>\n              </div>\n            </div>\n          </tab>\n\n          <tab heading=\"Nhận xét\" class=\"review\">\n            <div class=\"box\">\n              <div class=\"row\" id=\"post-review-box\">\n                <div class=\"col-md-12\">\n                  <form #f=\"ngForm\" (ngSubmit)=\"submitComment(f)\">\n                    <input id=\"ratings-hidden\" name=\"comment\" type=\"hidden\">\n                    <textarea class=\"form-control animated\" cols=\"50\" id=\"new-review\" name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"Enter your review here...\"\n                      rows=\"5\"></textarea>\n\n                    <div class=\"text-right\">\n                      <div>\n                        <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" name=\"rate\" (click)=\"getRating($event)\" (onLeave)=\"resetStar()\"\n                          [titles]=\"['1','2','3']\"></rating>\n                      </div>\n                      <p [hidden]=\"isLogin\" style=\"color: red\">{{message}}</p>\n                      <a class=\"btn btn-sm btn-danger\" href=\"\">\n                        <i class=\"fa fa-times-circle\"></i> Clear</a>\n                      <button class=\"btn btn-success btn-md\" type=\"submit\" [disabled]=\"!isLogin\">Save</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <!-- <div class=\"rating-block\">\n                    <h4>Average user rating</h4>\n                    <h2 class=\"bold padding-bottom-7\" *ngIf=\"allComments.avgRating\">{{allComments.avgRating}}\n                      <small>/ 5</small>\n                    </h2>\n                    <button *ngIf=\"allComments.avgRating >= 1\" type=\"button\" class=\"btn btn-warning btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating >= 2\" type=\"button\" class=\"btn btn-warning btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating >= 3\" type=\"button\" class=\"btn btn-warning btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating >= 4\" type=\"button\" class=\"btn btn-warning btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating >= 5\" type=\"button\" class=\"btn btn-warning btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating < 1\" type=\"button\" class=\"btn btn-default btn-grey btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating < 2\" type=\"button\" class=\"btn btn-default btn-grey btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating < 3\" type=\"button\" class=\"btn btn-default btn-grey btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating < 4\" type=\"button\" class=\"btn btn-default btn-grey btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button *ngIf=\"allComments.avgRating < 5\" type=\"button\" class=\"btn btn-default btn-grey btn-sm\" aria-label=\"Left Align\">\n                      <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                    </button>\n                  </div> -->\n                </div>\n                <div class=\"col-sm-6\">\n                  <h4>Rating breakdown</h4>\n                  <div class=\"pull-left\">\n                    <div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n                      <div style=\"height:9px; margin:5px 0;\">5\n                        <span class=\"glyphicon glyphicon-star\"></span>\n                      </div>\n                    </div>\n                    <div class=\"pull-left\" style=\"width:180px;\">\n                      <div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"5\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 1000%\">\n                          <span class=\"sr-only\">80% Complete (danger)</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"pull-right\" style=\"margin-left:10px;\">1</div>\n                  </div>\n                  <div class=\"pull-left\">\n                    <div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n                      <div style=\"height:9px; margin:5px 0;\">4\n                        <span class=\"glyphicon glyphicon-star\"></span>\n                      </div>\n                    </div>\n                    <div class=\"pull-left\" style=\"width:180px;\">\n                      <div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n                        <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"4\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 80%\">\n                          <span class=\"sr-only\">80% Complete (danger)</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"pull-right\" style=\"margin-left:10px;\">1</div>\n                  </div>\n                  <div class=\"pull-left\">\n                    <div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n                      <div style=\"height:9px; margin:5px 0;\">3\n                        <span class=\"glyphicon glyphicon-star\"></span>\n                      </div>\n                    </div>\n                    <div class=\"pull-left\" style=\"width:180px;\">\n                      <div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"3\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 60%\">\n                          <span class=\"sr-only\">80% Complete (danger)</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"pull-right\" style=\"margin-left:10px;\">0</div>\n                  </div>\n                  <div class=\"pull-left\">\n                    <div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n                      <div style=\"height:9px; margin:5px 0;\">2\n                        <span class=\"glyphicon glyphicon-star\"></span>\n                      </div>\n                    </div>\n                    <div class=\"pull-left\" style=\"width:180px;\">\n                      <div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n                        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 40%\">\n                          <span class=\"sr-only\">80% Complete (danger)</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"pull-right\" style=\"margin-left:10px;\">0</div>\n                  </div>\n                  <div class=\"pull-left\">\n                    <div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n                      <div style=\"height:9px; margin:5px 0;\">1\n                        <span class=\"glyphicon glyphicon-star\"></span>\n                      </div>\n                    </div>\n                    <div class=\"pull-left\" style=\"width:180px;\">\n                      <div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n                        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"1\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 20%\">\n                          <span class=\"sr-only\">80% Complete (danger)</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"pull-right\" style=\"margin-left:10px;\">0</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <hr/>\n                  <div class=\"review-block\" *ngFor=\"let comment of allComments\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-3\">\n                        <img src=\"http://dummyimage.com/60x60/666/ffffff&text=No+Image\" class=\"img-rounded\">\n                        <div class=\"review-block-name\">\n                          <a href=\"#\">{{comment.username}}</a>\n                        </div>\n                        <div class=\"review-block-date\">{{comment.createdAt | date}}\n                          <br/>{{comment.createdAt | amTimeAgo}}</div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                        <div class=\"review-block-rate\">\n                          <button *ngIf=\"comment.rating >= 1\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating >= 2\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating >= 3\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating >= 4\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating >= 5\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n\n                          <button *ngIf=\"comment.rating < 1\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating < 2\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating < 3\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating < 4\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button *ngIf=\"comment.rating < 5\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                        </div>\n                        <div class=\"review-block-title\">{{comment.content}}</div>\n                        <div class=\"review-block-description\">{{comment.content}}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tab>\n          <tab heading=\"Tư vấn mua hàng\">\n            <div class=\"box\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <p>Để được tư vấn mua hàng, bạn vui lòng gửi email đến địa chỉ:\n                    <a style=\"color: #00bb93\">info@something.com</a> nhé.</p>\n                  <p>Hoặc điện thoại đến Hotline: 01234567890.</p>\n                  <p>Chúng tôi sẽ cố gắng trả lời cho bạn trong thời gian sớm nhất mọi thắc mắc của bạn.</p>\n                </div>\n              </div>\n            </div>\n          </tab>\n        </tabset>\n      </div>\n\n\n      <div class=\"row same-height-row same-height\" *ngIf=\"recommentProducts\">\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"box \" style=\"height: auto; background-color: #4FBFA8; color: white\">\n            <h3>Có thể bạn thích!</h3>\n          </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6\" *ngFor=\"let product of recommentProducts\">\n          <div class=\"product same-height\">\n            <div class=\"flip-container\">\n              <div class=\"flipper\">\n                <div class=\"front\">\n                  <a href=\"detail.html\">\n                    <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n                <div class=\"back\">\n                  <a href=\"detail.html\">\n                    <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n                  </a>\n                </div>\n              </div>\n            </div>\n            <a href=\"detail.html\" class=\"invisible\">\n              <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n            </a>\n            <div class=\"text\">\n              <h3>\n                <a [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n              </h3>\n              <p class=\"price\">{{product.price}} VND</p>\n            </div>\n          </div>\n          <!-- /.product -->\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-3\">\n\n      <div class=\"col-md-12\" *ngFor=\"let product of relatedProducts\">\n        <div class=\"product same-height\">\n          <div class=\"flip-container\">\n            <div class=\"flipper\">\n              <div class=\"front\">\n                <a href=\"detail.html\">\n                  <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n                </a>\n              </div>\n              <div class=\"back\">\n                <a href=\"detail.html\">\n                  <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n                </a>\n              </div>\n            </div>\n          </div>\n          <a href=\"detail.html\" class=\"invisible\">\n            <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n          </a>\n          <div class=\"text\">\n            <h3>\n              <a [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n            </h3>\n            <p class=\"price\">{{product.price}} VND</p>\n          </div>\n        </div>\n        <!-- /.product -->\n      </div>\n\n      <!-- *** MENUS AND FILTERS ***\n _________________________________________________________ -->\n      <!-- <div class=\"panel panel-default sidebar-menu\">\n\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Categories</h3>\n        </div>\n\n        <div class=\"panel-body\">\n          <ul class=\"nav nav-pills nav-stacked category-menu\">\n            <li>\n              <a href=\"category.html\">Men\n                <span class=\"badge pull-right\">42</span>\n              </a>\n              <ul>\n                <li>\n                  <a href=\"category.html\">T-shirts</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Shirts</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Pants</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Accessories</a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"active\">\n              <a href=\"category.html\">Ladies\n                <span class=\"badge pull-right\">123</span>\n              </a>\n              <ul>\n                <li>\n                  <a href=\"category.html\">T-shirts</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Skirts</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Pants</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Accessories</a>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"category.html\">Kids\n                <span class=\"badge pull-right\">11</span>\n              </a>\n              <ul>\n                <li>\n                  <a href=\"category.html\">T-shirts</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Skirts</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Pants</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Accessories</a>\n                </li>\n              </ul>\n            </li>\n\n          </ul>\n\n        </div>\n      </div>\n\n      <div class=\"panel panel-default sidebar-menu\">\n\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Brands\n            <a class=\"btn btn-xs btn-danger pull-right\" href=\"#\">\n              <i class=\"fa fa-times-circle\"></i> Clear</a>\n          </h3>\n        </div>\n\n        <div class=\"panel-body\">\n\n          <form>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">Armani (10)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">Versace (12)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">Carlo Bruni (15)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">Jack Honey (14)\n                </label>\n              </div>\n            </div>\n\n            <button class=\"btn btn-default btn-sm btn-primary\">\n              <i class=\"fa fa-pencil\"></i> Apply</button>\n\n          </form>\n\n        </div>\n      </div>\n\n      <div class=\"panel panel-default sidebar-menu\">\n\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Colours\n            <a class=\"btn btn-xs btn-danger pull-right\" href=\"#\">\n              <i class=\"fa fa-times-circle\"></i> Clear</a>\n          </h3>\n        </div>\n\n        <div class=\"panel-body\">\n\n          <form>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">\n                  <span class=\"colour white\"></span> White (14)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">\n                  <span class=\"colour blue\"></span> Blue (10)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">\n                  <span class=\"colour green\"></span> Green (20)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">\n                  <span class=\"colour yellow\"></span> Yellow (13)\n                </label>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">\n                  <span class=\"colour red\"></span> Red (10)\n                </label>\n              </div>\n            </div>\n\n            <button class=\"btn btn-default btn-sm btn-primary\">\n              <i class=\"fa fa-pencil\"></i> Apply</button>\n\n          </form>\n\n        </div>\n      </div> -->\n\n      <!-- *** MENUS AND FILTERS END *** -->\n\n      <!-- <div class=\"banner\">\n        <a href=\"#\">\n          <img src=\"./assets/img/banner.jpg\" alt=\"sales 2014\" class=\"img-responsive\">\n        </a>\n      </div> -->\n    </div>\n    <!-- /.col-md-9 -->\n  </div>\n  <!-- /.container -->\n</div>\n<!-- /#content -->"

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("../../../../../config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailComponent = /** @class */ (function () {
    function DetailComponent(FB, route, userService, productsService) {
        var _this = this;
        this.FB = FB;
        this.route = route;
        this.userService = userService;
        this.productsService = productsService;
        this.message = "";
        this.max = 5;
        this.rate = 5;
        this.isReadonly = false;
        this.allComments = { productID: "", comments: [], avgRating: 0 };
        this.product = {
            _id: "",
            name: "",
            price: "",
            brand: "",
            rating: "",
            sale: "",
            isNew: "",
            kind: "",
            description: "",
            mainImage: "",
            slides: ["", "", "", ""],
            ingerdients: "",
            howto: "",
            createAt: "",
            info: ""
        };
        this.relatedProducts = [];
        this.recommentProducts = [];
        this.quotes = [
            {
                quote: "Think of all the beauty still left around you and be happy.",
                author: "Anne Frank"
            },
            {
                quote: "All little girls should be told they are pretty, even if they aren't.",
                author: "Marilyn Monroe"
            },
            {
                quote: "A girl should be two things: classy and fabulous.",
                author: "Coco Chanel"
            },
            {
                quote: "You are imperfect, permanently and inevitably flawed. And you are beautiful.",
                author: "Amy Bloom"
            },
            {
                quote: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
                author: "Rabindranath Tagore, Stray Birds"
            },
            {
                quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
                author: "Marcus Aurelius, Meditations"
            },
            {
                quote: "As if you were on fire from within.The moon lives in the lining of your skin.",
                author: "Pablo Neruda"
            },
            {
                quote: "Beauty is only skin deep, but ugly goes clean to the bone.",
                author: "Dorothy Parker"
            },
            {
                quote: "There is no exquisite beauty… without some strangeness in the proportion.",
                author: "Edgar Allan Poe"
            },
            {
                quote: "Everything has beauty, but not everyone sees it.",
                author: "Confucius"
            }
        ];
        this.tempCart = [];
        this.message = "Please log in to do it!";
        userService.userSource$.subscribe(function (res) {
            _this.isLogin = res;
            _this.message = "";
        });
        this.setLogin();
        if (document.getElementById("testScript"))
            document.getElementById("testScript").remove();
        var testScript = document.createElement("script");
        testScript.setAttribute("id", "testScript");
        testScript.setAttribute("src", "assets/js/front.js");
        document.body.appendChild(testScript);
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.productID = params.get("id");
            var url = __WEBPACK_IMPORTED_MODULE_6__config__["server"] + "/api/product/" + _this.productID;
            _this.productsService.getProduct(url).subscribe(function (res) {
                // res.data.sale = +res.data.sale;
                // res.data.price = +res.data.price;
                _this.product = res.data;
                console.log(_this.product);
                _this.product.sale = parseFloat(_this.product.sale).toFixed(1);
                _this.product.price = parseFloat(_this.product.price).toFixed(1);
            });
            _this.productsService.getComments(_this.productID).subscribe(function (res) {
                if (res.data) {
                    _this.allComments = res.data.reverse();
                    console.log(_this.allComments);
                }
            });
            _this.userID = _this.getUserID();
            _this.productsService.getRelatedProducts(_this.productID).subscribe(function (res) {
                _this.relatedProducts = res.data;
                console.log(res.data);
            });
        });
        this.quote = this.randomQuotes();
    };
    DetailComponent.prototype.submitComment = function (f) {
        var _this = this;
        this.userID = this.getUserID();
        if (this.userID) {
            var data = {
                productID: this.productID,
                userID: this.userID,
                username: this.username,
                content: f.value.comment,
                rating: f.value.rate
            };
            this.productsService.submitComment(data).subscribe(function (res) {
                _this.comment = "";
                console.log(res);
                _this.recommentProducts = res.data || [];
                _this.productsService.getComments(_this.productID).subscribe(function (res) {
                    if (res.success) {
                        console.log(res);
                        _this.allComments = res.data;
                        // this.allComments = _.flip(function() {
                        //   return _.toArray(this.allComments);
                        // });
                    }
                });
                // this.userID = this.getUserID();
                // this.productsService.getRecommentProducts(this.userID).subscribe(res => {
                //   this.recommentProducts = null;
                //   console.log(res.data);
                // });
            });
        }
    };
    DetailComponent.prototype.getRating = function (value) {
        this.overStar = value.target.title;
    };
    DetailComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    DetailComponent.prototype.shareFB = function () {
        var url = __WEBPACK_IMPORTED_MODULE_6__config__["server"] + "/detail/" + this.productID;
        if (this.isLogin == true) {
            var options = {
                method: "share",
                href: url
            };
            this.FB.ui(options)
                .then(function (res) {
                console.log("Got the users profile", res);
            })
                .catch(this.handleError);
            event.preventDefault();
        }
        else {
            this.message = "Please log in to do it!";
        }
    };
    // comment(value) {
    //   if(this.isLogin == true) {
    //     console.log(value);
    //   }
    //   else {
    //     this.message = 'Please log in to do it!';
    //   }
    // }
    DetailComponent.prototype.handleError = function (error) {
        console.error("Error processing action", error);
    };
    DetailComponent.prototype.setLogin = function () {
        if (Cookies.get("username")) {
            this.username = Cookies.get("username");
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
        }
    };
    DetailComponent.prototype.addToCart = function () {
        var _this = this;
        var isNew = true;
        this.product["qty"] = 1;
        // this.tempCart = JSON.parse(localStorage.getItem("tempCart"));
        //fix here
        console.log(this.product);
        console.log(this.tempCart);
        if (localStorage.getItem("tempCart")) {
            this.tempCart = JSON.parse(localStorage.getItem("tempCart"));
            __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](this.tempCart, function (product) {
                if (product._id === _this.product._id) {
                    product["qty"]++;
                    isNew = false;
                }
            });
            if (isNew) {
                this.tempCart.push(this.product);
            }
        }
        else
            this.tempCart.push(this.product);
        localStorage.setItem("tempCart", JSON.stringify(this.tempCart));
        // this.productsService.setTempCart(this.tempCart);
        this.productsService.setTempCart(this.product);
    };
    DetailComponent.prototype.addWishList = function () {
        this.userID = this.getUserID();
        if (this.userID) {
            var data = { userID: this.userID, product: this.product };
            this.productsService.addCart(data).subscribe(function (res) { return console.log(res); });
        }
    };
    DetailComponent.prototype.randomQuotes = function () {
        return this.quotes.sort(function (res) { return Math.random() - 0.5; });
    };
    DetailComponent.prototype.getUserID = function () {
        if (Cookies.get("id")) {
            this.userID = Cookies.get("id");
            return this.userID;
        }
        else if (Cookies.get("idGG")) {
            this.userID = Cookies.get("id");
            return this.userID;
        }
        else if (Cookies.get("idFB")) {
            this.userID = Cookies.get("id");
            return this.userID;
        }
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "safeHtml" }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-detail",
            template: __webpack_require__("../../../../../src/app/components/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */]) === "function" && _d || Object])
    ], DetailComponent);
    return DetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .leftRs {\n      position: absolute;\n      margin: auto;\n      top: 0;\n      bottom: 0;\n      width: 50px;\n      height: 50px;\n      box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n      border-radius: 999px;\n      left: 0;\n      background-color: #4fbfa8;\n      color: white\n  }\n\n  .rightRs {\n      position: absolute;\n      margin: auto;\n      top: 0;\n      bottom: 0;\n      width: 50px;\n      height: 50px;\n      box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n      border-radius: 999px;\n      right: 0;\n      background-color: #4fbfa8;\n      color: white\n  }\n  .product-name {\n    font-weight: 400;\n    height: 39.6px;\n    text-align: center;\n    overflow: hidden;\n    \n  }\n  .ribbon .theribbon {\n      width: 70px;\n  }\n  .ribbon .theribbon::after {\n      display: none;\n  }\n  .ribbon {\n      padding-left: 70px;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <div id=\"main-slider\">\n        <div class=\"item\">\n          <img src=\"assets/img/1.jpg\" alt=\"\" class=\"img-responsive\">\n        </div>\n        <div class=\"item\">\n          <img class=\"img-responsive\" src=\"assets/img/2.jpg\" alt=\"\">\n        </div>\n        <div class=\"item\">\n          <img class=\"img-responsive\" src=\"assets/img/3.jpg\" alt=\"\">\n        </div>\n        <div class=\"item\">\n          <img class=\"img-responsive\" src=\"assets/img/4.jpg\" alt=\"\">\n        </div>\n      </div>\n      <!-- /#main-slider -->\n    </div>\n  </div>\n\n  <!-- *** ADVANTAGES HOMEPAGE ***\n _________________________________________________________ -->\n  <div id=\"advantages\">\n\n    <div class=\"container\">\n      <div class=\"same-height-row\">\n        <!-- <div class=\"col-sm-4\">\n          <div class=\"box same-height clickable\">\n            <div class=\"icon\">\n              <i class=\"fa fa-heart\"></i>\n            </div>\n\n            <h3>\n              <a href=\"#\">We love our customers</a>\n            </h3>\n            <p>We are known to provide best possible service ever</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"box same-height clickable\">\n            <div class=\"icon\">\n              <i class=\"fa fa-tags\"></i>\n            </div>\n\n            <h3>\n              <a href=\"#\">Best prices</a>\n            </h3>\n            <p>You can check that the height of the boxes adjust when longer text like this one is used in one of them.</p>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"box same-height clickable\">\n            <div class=\"icon\">\n              <i class=\"fa fa-thumbs-up\"></i>\n            </div>\n\n            <h3>\n              <a href=\"#\">100% satisfaction guaranteed</a>\n            </h3>\n            <p>Free returns on everything for 3 months.</p>\n          </div>\n        </div> -->\n      </div>\n      <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n  </div>\n  <!-- /#advantages -->\n\n  <!-- *** ADVANTAGES END *** -->\n\n  <!-- *** HOT PRODUCT SLIDESHOW ***\n _________________________________________________________ -->\n  <div id=\"hot\">\n\n    <div class=\"box\">\n      <div class=\"container\">\n        <div class=\"col-md-12\">\n          <h2>Sản phẩm Hot</h2>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <ngx-carousel [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\">\n\n        <ngx-tile NgxCarouselItem *ngFor=\"let product of hotProducts\">\n\n          <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n          <h4 class=\"product-name\">\n            <a style=\"color: black\" [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n          </h4>\n          <p *ngIf=\"product.sale == 0\" class=\"text-center price-sale\">{{product.price}} VND</p>\n          <p *ngIf=\"product.sale > 0\" class=\"text-center\">\n            <del class=\"price\">{{product.price}} </del>\n            <span class=\"price-sale\"> {{product.price * (100 - product.sale)/100}} VND</span>\n          </p>\n          <div class=\"ribbon new\" *ngIf=\"product.isNew\">\n            <div class=\"theribbon\">NEW</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <!-- /.ribbon -->\n          <div class=\"ribbon sale\" *ngIf=\"product.sale > 0\">\n            <div class=\"theribbon\">{{product.sale}}%</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <!-- /.ribbon -->\n\n\n        </ngx-tile>\n\n        <button NgxCarouselPrev class='leftRs'>&lt;</button>\n        <button NgxCarouselNext class='rightRs'>&gt;</button>\n      </ngx-carousel>\n\n\n\n      <div class=\"box\">\n        <div class=\"container\">\n          <div class=\"col-md-12\">\n            <h2>Sản phẩm mới</h2>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"container\">\n        <ngx-carousel [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\" *ngIf=\"newProducts\">\n\n          <ngx-tile NgxCarouselItem *ngFor=\"let product of newProducts\">\n\n            <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n            <h4 class=\"product-name\">\n              <a style=\"color: black\" [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n            </h4>\n            <p *ngIf=\"product.sale == 0\" class=\"text-center price-sale\">{{product.price}} VND</p>\n            <p *ngIf=\"product.sale > 0\" class=\"text-center\">\n              <del class=\"price\">{{product.price}} </del>\n              <span class=\"price-sale\"> {{product.price * (100 - product.sale)/100}} VND</span>\n            </p>\n            <div class=\"ribbon new\">\n              <div class=\"theribbon\">NEW</div>\n              <div class=\"ribbon-background\"></div>\n            </div>\n            <!-- /.ribbon -->\n            <div class=\"ribbon sale\" *ngIf=\"product.sale > 0\">\n              <div class=\"theribbon\">{{product.sale}}%</div>\n              <div class=\"ribbon-background\"></div>\n            </div>\n            <!-- /.ribbon -->\n\n          </ngx-tile>\n\n          <button NgxCarouselPrev class='leftRs'>&lt;</button>\n          <button NgxCarouselNext class='rightRs'>&gt;</button>\n        </ngx-carousel>\n\n        <!-- /#hot -->\n\n        <!-- <div class=\"box\">\n          <div class=\"container\">\n            <div class=\"col-md-12\">\n              <h2>Sản phẩm đang giảm giá nhiều nhất</h2>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"container\">\n          <ngx-carousel [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\">\n\n            <ngx-tile NgxCarouselItem *ngFor=\"let product of saleProducts\">\n              <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n              <h4 class=\"product-name\">\n                <a style=\"color: black\" [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n              </h4>\n              <p *ngIf=\"product.sale == 0\" class=\"text-center price-sale\">{{product.price}} VND</p>\n              <p *ngIf=\"product.sale > 0\" class=\"text-center\">\n                <del class=\"price\">{{product.price}} </del>\n                <span class=\"price-sale\"> {{product.price * (100 - product.sale)/100}} VND</span>\n              </p>\n              <div class=\"ribbon new\" *ngIf=\"product.isNew\">\n                <div class=\"theribbon\">NEW</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <div class=\"ribbon sale\" *ngIf=\"product.sale > 0\">\n                <div class=\"theribbon\">{{product.sale}}%</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n            </ngx-tile>\n\n            <button NgxCarouselPrev class='leftRs'>&lt;</button>\n            <button NgxCarouselNext class='rightRs'>&gt;</button>\n          </ngx-carousel> -->\n        <!-- *** HOT END *** -->\n\n        <!-- *** GET INSPIRED ***\n _________________________________________________________ -->\n        <div class=\"container\">\n          <div class=\"col-md-12\">\n            <div class=\"box slideshow\">\n              <h3>Nguồn cảm hứng</h3>\n              <p class=\"lead\">Cảm hứng từ những thứ xinh đẹp</p>\n              <div id=\"get-inspired\" class=\"owl-carousel owl-theme\">\n                <div class=\"item\">\n                  <a href=\"#\">\n                    <img src=\"./assets/img/getinspired1.jpg\" alt=\"Get inspired\" class=\"img-responsive\">\n                  </a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\">\n                    <img src=\"./assets/img/getinspired2.jpg\" alt=\"Get inspired\" class=\"img-responsive\">\n                  </a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\">\n                    <img src=\"./assets/img/getinspired3.jpg\" alt=\"Get inspired\" class=\"img-responsive\">\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- *** GET INSPIRED END *** -->\n\n        <!-- *** BLOG HOMEPAGE ***\n _________________________________________________________ -->\n        <!-- \n          <div class=\"box text-center\">\n            <div class=\"container\">\n              <div class=\"col-md-12\">\n                <h3 class=\"text-uppercase\">From our blog</h3>\n\n                <p class=\"lead\">What's new in the world of fashion?\n                  <a href=\"blog.html\">Check our blog!</a>\n                </p>\n              </div>\n            </div>\n          </div> -->\n\n        <div class=\"container\">\n\n          <div class=\"col-md-12\">\n\n            <div id=\"blog-homepage\" class=\"row\">\n              <!-- <div class=\"col-sm-6\">\n                  <div class=\"post\">\n                    <h4>\n                      <a href=\"post.html\">Fashion now</a>\n                    </h4>\n                    <p class=\"author-category\">By\n                      <a href=\"#\">John Slim</a> in\n                      <a href=\"\">Fashion and style</a>\n                    </p>\n                    <hr>\n                    <p class=\"intro\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum\n                      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas\n                      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n                    <p class=\"read-more\">\n                      <a href=\"post.html\" class=\"btn btn-primary\">Continue reading</a>\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                  <div class=\"post\">\n                    <h4>\n                      <a href=\"post.html\">Who is who - example blog post</a>\n                    </h4>\n                    <p class=\"author-category\">By\n                      <a href=\"#\">John Slim</a> in\n                      <a href=\"\">About Minimal</a>\n                    </p>\n                    <hr>\n                    <p class=\"intro\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum\n                      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas\n                      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n                    <p class=\"read-more\">\n                      <a href=\"post.html\" class=\"btn btn-primary\">Continue reading</a>\n                    </p>\n                  </div>\n\n                </div> -->\n\n            </div>\n            <!-- /#blog-homepage -->\n          </div>\n        </div>\n        <!-- /.container -->\n\n        <!-- *** BLOG HOMEPAGE END *** -->\n\n\n      </div>\n      <!-- /#content -->\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(elementRef, router, productsService) {
        this.elementRef = elementRef;
        this.router = router;
        this.productsService = productsService;
        // public tempProduct = { "_id": "", "name": "", "price": "", "rating": "", "brand": "", "sale": "", "new": "", "kind": "", "description": "", "mainImage": "", "slides": [], "ingerdients": [], "howto": "", "createAt": "" };
        this.newProducts = [];
        this.hotProducts = [];
        this.inputValue = "";
        this.saleProducts = [];
        // router.events.subscribe(event => {
        //   if(event instanceof NavigationStart) {
        //     alert("ok");
        //   }
        // });
        if (document.getElementById("testScript"))
            document.getElementById("testScript").remove();
        var testScript = document.createElement("script");
        testScript.setAttribute("id", "testScript");
        testScript.setAttribute("src", "assets/js/front.js");
        document.body.appendChild(testScript);
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getAll().subscribe(function (res) {
            _this.saleProducts = _this.getSaleProducts(res.data);
            //  this.newProducts = this.getNewProducts(res.data);
            //  console.log(res.data);
            //  console.log(this.newProducts);
        });
        this.productsService.getHotProducts().subscribe(function (res) { _this.hotProducts = res.data; });
        this.productsService.getNewProducts().subscribe(function (res) {
            _this.newProducts = res.data;
        });
        // this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n              .ngxcarouselPoint {\n                list-style-type: none;\n                text-align: center;\n                padding: 12px;\n                margin: 0;\n                white-space: nowrap;\n                overflow: auto;\n                box-sizing: border-box;\n              }\n              .ngxcarouselPoint li {\n                display: inline-block;\n                border-radius: 50%;\n                border: 2px solid rgba(0, 0, 0, 0.55);\n                padding: 4px;\n                margin: 0 3px;\n                transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n                transition: .4s;\n              }\n              .ngxcarouselPoint li.active {\n                  background: #6b6b6b;\n                  transform: scale(1.2);\n              }\n            "
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
    };
    HomeComponent.prototype.addScriptTagToElementDOM = function (pathToScript) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", pathToScript);
        this.elementRef.nativeElement.appendChild(script);
    };
    HomeComponent.prototype.getNewProducts = function (arr) {
        var newProducts = __WEBPACK_IMPORTED_MODULE_2_lodash__["partition"](arr, ['isNew', 'true']);
        console.log(newProducts);
        // newProducts = _.orderBy(newProducts, ['createAt'], ['desc']);
        newProducts.length = 10;
        return newProducts;
    };
    HomeComponent.prototype.getSaleProducts = function (arr) {
        var saleProducts = __WEBPACK_IMPORTED_MODULE_2_lodash__["partition"](arr, function (res) {
            return res.sale > 0;
        })[0];
        // console.log(saleProducts);
        saleProducts = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](saleProducts, ['sale'], ['desc']);
        saleProducts.length = 10;
        return saleProducts;
    };
    HomeComponent.prototype.pickItem = function (event) {
        event.preventDefault();
        this.inputValue = event.target.innerHTML;
    };
    HomeComponent.prototype.carouselTileLoad = function (evt) {
        // const len = this.carouselTileItems.length
        // if (len <= 30) {
        //   for (let i = len; i < len + 10; i++) {
        //     this.carouselTileItems.push(i);
        //   }
        // }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());

//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warning {\n    color: #D9534F;\n    padding-top: 4px;\n    padding-left: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"container\">\n\n        <div class=\"col-md-12\">\n\n            <ul class=\"breadcrumb\">\n                <li>\n                    <a href=\"#\">Home</a>\n                </li>\n                <li>New account / Sign in</li>\n            </ul>\n\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"box\">\n                <h1>New account</h1>\n\n                <p class=\"lead\">Not our registered customer yet?</p>\n                <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole\n                    process will not take you more than a minute!</p>\n                <p class=\"text-muted\">If you have any questions, please feel free to\n                    <a href=\"contact.html\">contact us</a>, our customer service center is working for you 24/7.</p>\n\n                <hr>\n\n                <form #fr=\"ngForm\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                    <div class=\"form-inline\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Tên</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"firstName\" pattern=\"[A-Za-z]{4,}$\">\n                        </div>\n                        <div class=\"form-group pull-right\">\n                            <label for=\"name\">Họ</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"lastName\" pattern=\"[A-Za-z]{4,}$\" >\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                        <div *ngIf=\"registerForm.get('email').errors && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n                            <div [hidden]=\"!registerForm.get('email').errors.email || registerForm.get('email').value == ''\" class=\"warning\">*Email is not valid</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n                        <div *ngIf=\"registerForm.get('password').errors && (registerForm.get('password').dirty || registerForm.get('password').touched)\">\n                            <div [hidden]=\"!registerForm.get('password').errors.pattern || registerForm.get('password').value == ''\" class=\"warning\">*Password has to contain at least one letter and one number</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password Comfirm</label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"passwordComfirm\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n                        <div *ngIf=\"registerForm.get('passwordComfirm').errors && (registerForm.get('passwordComfirm').dirty || registerForm.get('passwordComfirm').touched)\">\n                            <div [hidden]=\"!registerForm.get('passwordComfirm').errors.pattern || registerForm.get('passwordComfirm').value == ''\" class=\"warning\">*Password Comfirm has to contain at least one letter and one number</div>\n                        </div>\n                    </div>\n                    <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG\"></re-captcha>\n                    <div class=\" warning\" [hidden]=\"messageRegister==''\" style=\"margin-top:-15px;margin-bottom:5px;\">{{messageRegister}}</div>\n                    <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(fr.form.valid && isCheckCaptcha == true)\" style=\"margin-top: 10px;\">\n                            <i class=\"fa fa-user-md\"></i> Register</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"box\">\n                <h1>Login</h1>\n\n                <p class=\"lead\">Already our customer?</p>\n                <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum\n                    tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas\n                    semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n\n                <hr>\n\n                <form [formGroup]=\"loginForm\" #f=\"ngForm\" (ngSubmit)=\"login()\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n                        <div *ngIf=\"loginForm.get('email').errors && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                            <div [hidden]=\"!loginForm.get('email').errors.email || loginForm.get('email').value == ''\" class=\"warning\">*Email is not valid</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n                    </div>\n                    <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG\"></re-captcha>\n                    <div class=\" warning\" [hidden]=\"messageLogin==''\" style=\"margin-top:-15px;margin-bottom:5px;\">{{messageLogin}}</div>\n                    <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.form.valid\">\n                            <i class=\"fa fa-sign-in\"></i> Log in</button>\n                        <!-- [disabled]=\"!f.form.valid\" -->\n                    </div>\n                </form>\n            </div>\n        </div>\n\n\n    </div>\n    <!-- /.container -->\n</div>\n<!-- /#content -->"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.messageRegister = '';
        this.messageLogin = '';
        this.expires = 30;
        this.captcha = '';
        this.isCheckCaptcha = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)],]
        });
        this.registerForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
            passwordComfirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(24)]],
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.value.password === this.registerForm.value.passwordComfirm) {
            var data = {
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                firstName: this.registerForm.value.firstName,
                lastName: this.registerForm.value.lastName,
                recaptcha: this.captcha
            };
            this.userService.register(data).subscribe(function (res) { _this.messageRegister = 'Sign up success!!!'; _this.registerForm.reset(); location.reload(); });
        }
        else
            this.messageRegister = "Password not match";
    };
    RegisterComponent.prototype.login = function () {
        var _this = this;
        var value = this.loginForm.value;
        var data = { email: value.email, password: value.password, recaptcha: this.captcha };
        this.userService.logIn(data).subscribe(function (res) {
            _this.messageLogin = res.error;
            if (res.success === true) {
                var username = res.data[0].profile.firstName + ' ' + res.data[0].profile.lastName;
                Cookies.set('username', username, { expires: _this.expires, path: '' });
                Cookies.set('token', res.data[0].token, { expires: _this.expires, path: '' });
                // this.setLogin();
                _this.userService.loginFromRegisterPage(username);
                _this.userService.sendDataUser(username);
                _this.loginForm.reset();
                _this.router.navigate(['/home']);
            }
        });
    };
    RegisterComponent.prototype.resolved = function (captchaResponse) {
        if (captchaResponse) {
            this.isCheckCaptcha = true;
            return this.captcha = captchaResponse;
        }
        else {
            this.isCheckCaptcha = false;
            return this.captcha = captchaResponse;
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default sidebar-menu\">\n\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title text-center\">Tìm kiếm nâng cao</h3>\n          </div>\n\n          <div class=\"panel-body\">\n            <form #f=\"ngForm\" (ngSubmit)=\"search2(f.value)\" [formGroup]=\"searchForm\">\n              <div class=\"col-md-1\"></div>\n\n              <div class=\"col-md-4 form-group\">\n                <label for=\"comment\">Mô tả: </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"description\">\n                <div style=\"margin-top: 10px\">\n                  <button class=\"btn btn-default btn-sm btn-primary\" type=\"submit\">\n                    <i class=\"fa fa-pencil\"></i> Tìm kiếm</button>\n                </div>\n\n              </div>\n\n              <div class=\"col-md-1\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row products\" *ngIf=\"productsSearch\">\n\n      <div class=\"col-md-3 col-sm-6\" *ngFor=\"let product of productsSearch\">\n        <div class=\"product\">\n          <div class=\"flip-container\">\n            <div class=\"flipper\">\n              <div class=\"front\">\n                <a href=\"detail.html\">\n                  <img src=\"{{product.mainImage}}\" alt=\"\" style=\"height:250px\" class=\"img-responsive\" align=\"middle\">\n                </a>\n              </div>\n              <div class=\"back\">\n                <a href=\"detail.html\">\n                  <img src=\"{{product.mainImage}}\" alt=\"\" style=\"height:250px\" class=\"img-responsive\" align=\"middle\">\n                </a>\n              </div>\n            </div>\n          </div>\n          <a [routerLink]=\"['/detail', product._id]\" class=\"invisible\">\n            <img src=\"{{product.mainImage}}\" style=\"height:250px\" alt=\"\" class=\"img-responsive\" align=\"middle\">\n          </a>\n          <div class=\"text\">\n            <h3>\n              <a [routerLink]=\"['/detail', product._id]\">{{product.name}}</a>\n            </h3>\n            <p class=\"brand\">{{product.brand}}</p>\n            <p class=\"buttons\" *ngIf=\"product.sale > 0\">\n              <del class=\"price\" style=\"margin-right:4px\">{{product.price | number}} VND </del>\n              <span class=\"price-sale\">{{(100 -product.sale)*product.price/100 | number}} VND</span>\n            </p>\n            <p class=\"buttons\" *ngIf=\"product.sale == 0\">\n              <span class=\"price\">{{product.price | number}} VND</span>\n            </p>\n            <a class=\"btn btn-primary\" style=\"display:block; margin: 0 auto 10px auto\" [routerLink]=\"['/detail', product._id]\">Chi tiết</a>\n          </div>\n          <!-- /.text -->\n          <div class=\"ribbon sale\" *ngIf=\"product.sale > 0\">\n            <div class=\"theribbon\">{{product.sale}}%</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <!-- /.ribbon -->\n\n          <div class=\"ribbon new\" *ngIf=\"product.new\">\n            <div class=\"theribbon\">NEW</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <!-- /.ribbon -->\n        </div>\n        <!-- /.product -->\n      </div>\n\n\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    // public products2 = [];
    function SearchComponent(productsService, form) {
        this.productsService = productsService;
        this.form = form;
        this.searchText = "";
        this.brandsAreChose = "";
        this.brands = [
            "Merzy",
            "Laneige",
            "3CE",
            "Etude House",
            "SU:M 37",
            "Innisfree",
            "MINI GARDEN",
            "SkinFood",
            "The Face Shop",
            "APRIL SKIN",
            "VASELINE"
        ];
        this.kinds = ["face", "eye", "lips", "hair", "skin", "accessories", "body"];
        this.productsSearch = [];
        this.descriptionInput = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getAll().subscribe(function (res) {
            _this.allProduct = res.data;
        });
        this.searchForm = this.form.group({
            brand: this.form.array([]),
            kind: this.form.array([]),
            description: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.productsService.getCategories().subscribe(function (res) {
            _this.kinds = res.data;
            _this.kinds = res.data;
        });
        this.productsService.getBrands().subscribe(function (res) {
            _this.brands = res.data;
        });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        // console.log(_.filter(this.allProduct, function (product) { return product.name.indexOf("PA++") !== -1; }));
        var productsForBrands = [];
        var productsForKinds = [];
        if (this.searchForm.value.brand.length) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.searchForm.value.brand, function (brand) {
                productsForBrands = __WEBPACK_IMPORTED_MODULE_2_lodash__["concat"](productsForBrands, __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](_this.allProduct, { brand: brand.name }));
            });
        }
        else
            productsForBrands = this.allProduct;
        if (this.searchForm.value.kind.length) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.searchForm.value.kind, function (kind) {
                productsForKinds = __WEBPACK_IMPORTED_MODULE_2_lodash__["concat"](productsForKinds, __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](productsForBrands, { category: kind.name }));
            });
        }
        else
            productsForKinds = productsForBrands;
        this.productsSearch = [];
        if (this.searchForm.value.description) {
            this.productsSearch = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](productsForKinds, function (product) {
                if (_this.isMatch(product.name, _this.searchForm.value.description) ||
                    _this.isMatch(product.name, _this.searchForm.value.description) ||
                    _this.isMatch(product.description, _this.searchForm.value.description) ||
                    _this.isMatch(product.ingerdients, _this.searchForm.value.description) ||
                    _this.isMatch(product.info, _this.searchForm.value.description))
                    return product;
            });
        }
        else {
            this.productsSearch = productsForKinds;
        }
        console.log(this.productsSearch);
    };
    SearchComponent.prototype.search2 = function (value) {
        var _this = this;
        var text = value.description;
        this.productsService.search2(text).subscribe(function (res) {
            console.log(res);
            _this.productsSearch = res.data;
        });
    };
    SearchComponent.prototype.onChangeBrandChoosing = function (brand, isChecked) {
        var brandFormArray = this.searchForm.controls.brand;
        if (isChecked) {
            brandFormArray.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](brand));
        }
        else {
            var index = brandFormArray.controls.findIndex(function (x) { return x.value == brand; });
            brandFormArray.removeAt(index);
        }
    };
    SearchComponent.prototype.onChangeKindChoosing = function (kind, isChecked) {
        var kindFormArray = this.searchForm.controls.kind;
        if (isChecked) {
            kindFormArray.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](kind));
        }
        else {
            var index = kindFormArray.controls.findIndex(function (x) { return x.value == kind; });
            kindFormArray.removeAt(index);
        }
    };
    SearchComponent.prototype.formatName = function (text) {
        var newText = text
            .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
            .replace(/đ/g, "d")
            .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
            .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
            .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
            .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
            .replace(/ì|í|ị|ỉ|ĩ/g, "i")
            .replace(/[^a-zA-Z0-9\ ]/g, "");
        return newText;
    };
    SearchComponent.prototype.isMatch = function (text1, text2) {
        var _this = this;
        if (text1) {
            text2 = text2.toLowerCase();
            text2 = this.formatName(text2);
            var check_1 = false;
            if (typeof text1 === "object") {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](text1, function (item) {
                    item = item.toLowerCase();
                    item = _this.formatName(item);
                    // console.log(item);
                    // console.log(text2);
                    if (item.indexOf(text2) !== -1) {
                        check_1 = true;
                    }
                });
            }
            else {
                text1 = text1.toLowerCase();
                text1 = this.formatName(text1);
                if (text1.indexOf(text2) !== -1)
                    check_1 = true;
                else
                    check_1 = false;
            }
            if (check_1)
                return 1;
            else
                return 0;
        }
        return 0;
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-search",
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/wish-list/wish-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/wish-list/wish-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n      <div class=\"col-md-12\">\n\n        <ul class=\"breadcrumb\">\n          <li>\n            <a href=\"index.html\">Home</a>\n          </li>\n          <li>My wishlist</li>\n        </ul>\n\n      </div>\n\n      <div class=\"col-md-3\">\n        <!-- *** CUSTOMER MENU ***\n   _________________________________________________________ -->\n        <div class=\"panel panel-default sidebar-menu\">\n\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Customer section</h3>\n          </div>\n\n          <div class=\"panel-body\">\n\n            <ul class=\"nav nav-pills nav-stacked\">\n              <li class=\"active\">\n                <a href=\"customer-orders.html\">\n                  <i class=\"fa fa-list\"></i> My orders</a>\n              </li>\n              <li>\n                <a href=\"customer-wishlist.html\">\n                  <i class=\"fa fa-heart\"></i> My wishlist</a>\n              </li>\n              <li>\n                <a href=\"customer-account.html\">\n                  <i class=\"fa fa-user\"></i> My account</a>\n              </li>\n              <li>\n                <a href=\"index.html\">\n                  <i class=\"fa fa-sign-out\"></i> Logout</a>\n              </li>\n            </ul>\n          </div>\n\n        </div>\n        <!-- /.col-md-3 -->\n\n        <!-- *** CUSTOMER MENU END *** -->\n      </div>\n\n      <div class=\"col-md-9\" id=\"wishlist\">\n\n        <ul class=\"breadcrumb\">\n          <li>\n            <a href=\"#\">Home</a>\n          </li>\n          <li>Ladies</li>\n        </ul>\n\n        <div class=\"box\">\n          <h1>My wishlist</h1>\n          <p class=\"lead\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n        </div>\n\n        <div class=\"row products\">\n\n          <div class=\"col-md-3 col-sm-4\" *ngFor=\"let product of productsWishList\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\">\n                    <a href=\"detail.html\">\n                      <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n                    </a>\n                  </div>\n                  <div class=\"back\">\n                    <a href=\"detail.html\">\n                      <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <a href=\"detail.html\" class=\"invisible\">\n                <img src=\"{{product.mainImage}}\" alt=\"\" class=\"img-responsive\">\n              </a>\n              <div class=\"text\">\n                <h3>\n                  <a href=\"detail.html\">{{product.name}}</a>\n                </h3>\n                <p class=\"buttons\" *ngIf=\"product.sale > 0\">\n                  <del class=\"price\" style=\"margin-right:4px\">{{product.price | number}} VND </del>\n                  <span class=\"price-sale\">{{(100 -product.sale)*product.price/100 | number}} VND</span>\n                </p>\n                <p class=\"buttons\" *ngIf=\"product.sale == 0\" style=\"height:47px\">\n                  <span class=\"price\">{{product.price | number}} VND</span>\n                </p>\n                <p class=\"buttons\">\n                  <a [routerLink]=\"['/detail', product._id]\" class=\"btn btn-default\">Chi tiết</a>\n                  <a href=\"basket.html\" class=\"btn btn-primary\" >\n                    <i class=\"fa fa-shopping-cart\"></i></a>\n                </p>\n              </div>\n              <!-- /.text -->\n              <div class=\"ribbon sale\" *ngIf=\"product.sale > 0\">\n                <div class=\"theribbon\">{{product.sale | number}}%</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon -->\n\n              <div class=\"ribbon new\" *ngIf=\"product.new\">\n                <div class=\"theribbon\">NEW</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon -->\n            </div>\n            <!-- /.product -->\n          </div>\n\n\n        </div>\n      </div>\n      <!-- /.container -->\n    </div>\n    <!-- /#content -->\n\n\n    <!-- *** FOOTER ***\n   _________________________________________________________ -->\n    <div id=\"footer\" data-animate=\"fadeInUp\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-sm-6\">\n            <h4>Pages</h4>\n\n            <ul>\n              <li>\n                <a href=\"text.html\">About us</a>\n              </li>\n              <li>\n                <a href=\"text.html\">Terms and conditions</a>\n              </li>\n              <li>\n                <a href=\"faq.html\">FAQ</a>\n              </li>\n              <li>\n                <a href=\"contact.html\">Contact us</a>\n              </li>\n            </ul>\n\n            <hr>\n\n            <h4>User section</h4>\n\n            <ul>\n              <li>\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#login-modal\">Login</a>\n              </li>\n              <li>\n                <a href=\"register.html\">Regiter</a>\n              </li>\n            </ul>\n\n            <hr class=\"hidden-md hidden-lg hidden-sm\">\n\n          </div>\n          <!-- /.col-md-3 -->\n\n          <div class=\"col-md-3 col-sm-6\">\n\n            <h4>Top categories</h4>\n\n            <h5>Men</h5>\n\n            <ul>\n              <li>\n                <a href=\"category.html\">T-shirts</a>\n              </li>\n              <li>\n                <a href=\"category.html\">Shirts</a>\n              </li>\n              <li>\n                <a href=\"category.html\">Accessories</a>\n              </li>\n            </ul>\n\n            <h5>Ladies</h5>\n            <ul>\n              <li>\n                <a href=\"category.html\">T-shirts</a>\n              </li>\n              <li>\n                <a href=\"category.html\">Skirts</a>\n              </li>\n              <li>\n                <a href=\"category.html\">Pants</a>\n              </li>\n              <li>\n                <a href=\"category.html\">Accessories</a>\n              </li>\n            </ul>\n\n            <hr class=\"hidden-md hidden-lg\">\n\n          </div>\n          <!-- /.col-md-3 -->\n\n          <div class=\"col-md-3 col-sm-6\">\n\n            <h4>Where to find us</h4>\n\n            <p>\n              <strong>Obaju Ltd.</strong>\n              <br>13/25 New Avenue\n              <br>New Heaven\n              <br>45Y 73J\n              <br>England\n              <br>\n              <strong>Great Britain</strong>\n            </p>\n\n            <a href=\"contact.html\">Go to contact page</a>\n\n            <hr class=\"hidden-md hidden-lg\">\n\n          </div>\n          <!-- /.col-md-3 -->\n\n\n\n          <div class=\"col-md-3 col-sm-6\">\n\n            <h4>Get the news</h4>\n\n            <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n\n            <form>\n              <div class=\"input-group\">\n\n                <input type=\"text\" class=\"form-control\">\n\n                <span class=\"input-group-btn\">\n\n                  <button class=\"btn btn-default\" type=\"button\">Subscribe!</button>\n\n                </span>\n\n              </div>\n              <!-- /input-group -->\n            </form>\n\n            <hr>\n\n            <h4>Stay in touch</h4>\n\n            <p class=\"social\">\n              <a href=\"#\" class=\"facebook external\" data-animate-hover=\"shake\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n              <a href=\"#\" class=\"twitter external\" data-animate-hover=\"shake\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n              <a href=\"#\" class=\"instagram external\" data-animate-hover=\"shake\">\n                <i class=\"fa fa-instagram\"></i>\n              </a>\n              <a href=\"#\" class=\"gplus external\" data-animate-hover=\"shake\">\n                <i class=\"fa fa-google-plus\"></i>\n              </a>\n              <a href=\"#\" class=\"email external\" data-animate-hover=\"shake\">\n                <i class=\"fa fa-envelope\"></i>\n              </a>\n            </p>\n\n\n          </div>\n          <!-- /.col-md-3 -->\n\n        </div>\n        <!-- /.row -->\n\n      </div>\n      <!-- /.container -->\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/wish-list/wish-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/_services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishListComponent = /** @class */ (function () {
    function WishListComponent(productsService) {
        this.productsService = productsService;
    }
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = this.getUserID();
        this.productsService.getCart(this.userID).subscribe(function (res) {
            if (res) {
                _this.productsWishList = res.product;
            }
        });
    };
    WishListComponent.prototype.getUserID = function () {
        if (Cookies.get('id'))
            this.userID = Cookies.get('id');
        else if (Cookies.get('idGG'))
            this.userID = Cookies.get('idGG');
        else if (Cookies.get('idFB'))
            this.userID = Cookies.get('idFB');
        return this.userID;
    };
    WishListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wish-list',
            template: __webpack_require__("../../../../../src/app/components/wish-list/wish-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/wish-list/wish-list.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
    ], WishListComponent);
    return WishListComponent;
    var _a;
}());

//# sourceMappingURL=wish-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/moment-from-now.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentFromNowPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MomentFromNowPipe = /** @class */ (function () {
    function MomentFromNowPipe() {
    }
    MomentFromNowPipe.prototype.transform = function (value, args) {
        return null;
    };
    MomentFromNowPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'momentFromNow'
        })
    ], MomentFromNowPipe);
    return MomentFromNowPipe;
}());

//# sourceMappingURL=moment-from-now.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safehtml.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());

//# sourceMappingURL=safehtml.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    // boldWord(word:string, sentence) {
    //   sentence.replace(/word/gi, x => {
    //     return x.bold();
    //   });
    // }
    SearchPipe.prototype.transform = function (items, filter, products) {
        var options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "name",
            ]
        };
        // var fuse = new Fuse(products, options); // "list" is the item array
        // var result = fuse.search(filter);
        // return result;
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map