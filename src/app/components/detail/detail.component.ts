import {
  Component,
  OnInit,
  ViewChild,
  PipeTransform,
  Pipe
} from "@angular/core";
import { UIParams, UIResponse, FacebookService } from "ngx-facebook";
import {
  ActivatedRoute,
  Router,
  ParamMap,
  RouterLinkActive
} from "@angular/router";
import { UserService } from "../../_services/user.service";
import { AppComponent } from "../../app.component";
import { NgForm } from "@angular/forms";
import { ProductsService } from "../../_services/products.service";
import { DecimalPipe } from "@angular/common";
import * as moment from "moment";
import * as _ from "lodash";
import { server } from "../../../../config";
import { log } from "util";
declare var Cookies: any;

@Pipe({ name: "safeHtml" })
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  message: string = "";
  max = 5;
  rate = 5;
  isReadonly = false;
  isLogin: boolean;
  userID;
  overStar: number;
  comment;
  allComments = { productID: "", comments: [], avgRating: 0 };
  username: string;
  productID: any;
  product = {
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
  relatedProducts = [];
  recommentProducts = [];
  quotes = [
    {
      quote: "Think of all the beauty still left around you and be happy.",
      author: "Anne Frank"
    },
    {
      quote:
        "All little girls should be told they are pretty, even if they aren't.",
      author: "Marilyn Monroe"
    },
    {
      quote: "A girl should be two things: classy and fabulous.",
      author: "Coco Chanel"
    },
    {
      quote:
        "You are imperfect, permanently and inevitably flawed. And you are beautiful.",
      author: "Amy Bloom"
    },
    {
      quote:
        "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
      author: "Rabindranath Tagore, Stray Birds"
    },
    {
      quote:
        "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
      author: "Marcus Aurelius, Meditations"
    },
    {
      quote:
        "As if you were on fire from within.The moon lives in the lining of your skin.",
      author: "Pablo Neruda"
    },
    {
      quote: "Beauty is only skin deep, but ugly goes clean to the bone.",
      author: "Dorothy Parker"
    },
    {
      quote:
        "There is no exquisite beauty… without some strangeness in the proportion.",
      author: "Edgar Allan Poe"
    },
    {
      quote: "Everything has beauty, but not everyone sees it.",
      author: "Confucius"
    }
  ];
  quote: any;
  tempCart: Array<any> = [];

  constructor(
    private FB: FacebookService,
    private route: ActivatedRoute,
    private userService: UserService,
    private productsService: ProductsService
  ) {
    this.message = "Please log in to do it!";
    userService.userSource$.subscribe(res => {
      this.isLogin = res;
      this.message = "";
    });
    this.setLogin();

    if (document.getElementById("testScript"))
      document.getElementById("testScript").remove();
    var testScript = document.createElement("script");
    testScript.setAttribute("id", "testScript");
    testScript.setAttribute("src", "assets/js/front.js");
    document.body.appendChild(testScript);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productID = params.get("id");
      let url = `${server}/api/product/` + this.productID;
      this.productsService.getProduct(url).subscribe(res => {
        // res.data.sale = +res.data.sale;
        // res.data.price = +res.data.price;
        this.product = res.data;
        console.log(this.product);
        this.product.sale = parseFloat(this.product.sale).toFixed(1);
        this.product.price = parseFloat(this.product.price).toFixed(1);
      });

      this.productsService.getComments(this.productID).subscribe(res => {
        if (res.data) {
          this.allComments = res.data.reverse();
          console.log(this.allComments);
        }
      });
      this.userID = this.getUserID();
      this.productsService.getRelatedProducts(this.productID).subscribe(res => {
        this.relatedProducts = res.data;
        console.log(res.data);
      });
    });
    this.quote = this.randomQuotes();
  }

  submitComment(f: NgForm) {
    this.userID = this.getUserID();
    if (this.userID) {
      let data = {
        productID: this.productID,
        userID: this.userID,
        username: this.username,
        content: f.value.comment,
        rating: f.value.rate
      };

      this.productsService.submitComment(data).subscribe(res => {
        this.comment = "";
        console.log(res);
        this.recommentProducts = res.data || [];
        this.productsService.getComments(this.productID).subscribe(res => {
          if (res.success) {
            console.log(res);
            this.allComments = res.data;
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
  }

  getRating(value): void {
    this.overStar = value.target.title;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  shareFB() {
    let url = `${server}/detail/` + this.productID;
    if (this.isLogin == true) {
      const options: UIParams = {
        method: "share",
        href: url
      };
      this.FB.ui(options)
        .then((res: UIResponse) => {
          console.log("Got the users profile", res);
        })
        .catch(this.handleError);
      event.preventDefault();
    } else {
      this.message = "Please log in to do it!";
    }
  }

  // comment(value) {
  //   if(this.isLogin == true) {
  //     console.log(value);

  //   }
  //   else {
  //     this.message = 'Please log in to do it!';
  //   }
  // }

  private handleError(error) {
    console.error("Error processing action", error);
  }

  setLogin() {
    if (Cookies.get("username")) {
      this.username = Cookies.get("username");
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  addToCart() {
    let isNew = true;
    this.product["qty"] = 1;
    // this.tempCart = JSON.parse(localStorage.getItem("tempCart"));
    //fix here
    console.log(this.product);
    console.log(this.tempCart);
    if (localStorage.getItem("tempCart")) {
      this.tempCart = JSON.parse(localStorage.getItem("tempCart"));
      _.map(this.tempCart, product => {
        if (product._id === this.product._id) {
          product["qty"]++;
          isNew = false;
        }
      });
      if (isNew) {
        this.tempCart.push(this.product);
      }
    } else this.tempCart.push(this.product);

    localStorage.setItem("tempCart", JSON.stringify(this.tempCart));
    // this.productsService.setTempCart(this.tempCart);
    this.productsService.setTempCart(this.product);
  }

  addWishList() {
    this.userID = this.getUserID();
    if (this.userID) {
      let data = { userID: this.userID, product: this.product };
      this.productsService.addCart(data).subscribe(res => console.log(res));
    }
  }

  randomQuotes() {
    return this.quotes.sort(res => Math.random() - 0.5);
  }

  getUserID() {
    if (Cookies.get("id")) {
      this.userID = Cookies.get("id");
      return this.userID;
    } else if (Cookies.get("idGG")) {
      this.userID = Cookies.get("id");
      return this.userID;
    } else if (Cookies.get("idFB")) {
      this.userID = Cookies.get("id");
      return this.userID;
    }
  }
}
