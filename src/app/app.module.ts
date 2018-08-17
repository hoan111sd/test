import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FacebookModule } from "ngx-facebook";
import { AgmCoreModule } from "@agm/core";
import { RECAPTCHA_LANGUAGE } from "ng-recaptcha";
import { UserService } from "./_services/user.service";
import { ProductsService } from "./_services/products.service";
import { PaginationService } from "./_services/pagination.service";
import { AppComponent } from "./app.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { SearchPipe } from "./pipes/search.pipe";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DetailComponent } from "./components/detail/detail.component";
import { TypeaheadModule, ModalModule } from "ngx-bootstrap";
import { BasketComponent } from "./components/basket/basket.component";
import { AuthGuard } from "./_guards/auth.guard";
import { CustomerAccountComponent } from "./components/customer-account/customer-account.component";
import { Checkout1Component } from "./components/checkout1/checkout1.component";
import { CategoryComponent } from "./components/category/category.component";
import { TabsModule } from "ngx-bootstrap";
import { RatingModule } from "ngx-bootstrap";
import { MomentFromNowPipe } from "./pipes/moment-from-now.pipe";
import { MomentModule } from "angular2-moment";
import { WishListComponent } from "./components/wish-list/wish-list.component";
import { NgxCarouselModule } from "ngx-carousel";
import "hammerjs";
import { SearchComponent } from "./components/search/search.component";
import { RecaptchaModule } from "ng-recaptcha";
import { CheckoutSuccessComponent } from "./components/checkout-success/checkout-success.component";
import { RegisterGuard } from "./_guards/register.guard";

import { SafeHtmlPipe } from "./pipes/safehtml.pipe";

import { CheckoutGuard } from "./_guards/checkout.guard";
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "register", component: RegisterComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "basket", component: BasketComponent },
  {
    path: "account",
    component: CustomerAccountComponent,
    canActivate: [AuthGuard]
  },
  { path: "wishlist", component: WishListComponent, canActivate: [AuthGuard] },
  { path: "checkout", component: Checkout1Component },
  { path: "checkout/success", component: CheckoutSuccessComponent },
  { path: "category/all", component: CategoryComponent },
  { path: "search", component: SearchComponent },
  {
    path: "category/:type/:kind",
    component: CategoryComponent
    // children: [
    //   { path: '/:type/:kind', component: CategoryComponent },

    // ]
  },
  // canActivate: [AuthGuard]
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    SearchPipe,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    DetailComponent,
    BasketComponent,
    CustomerAccountComponent,
    Checkout1Component,
    CategoryComponent,
    MomentFromNowPipe,
    WishListComponent,
    SearchComponent,
    CheckoutSuccessComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    TypeaheadModule.forRoot(),
    HttpModule,
    FacebookModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "6LffB00UAAAAAKCipdmwqbLTzE7KCoJrd67SD7oG"
    }),
    MomentModule,
    NgxCarouselModule,
    RecaptchaModule.forRoot()
  ],
  providers: [
    UserService,
    AuthGuard,
    PaginationService,
    ProductsService,
    CheckoutGuard,
    RegisterGuard,
    UserService,
    AuthGuard,
    PaginationService,
    ProductsService,
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "en" // use French language
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
