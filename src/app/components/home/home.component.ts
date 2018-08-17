import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from '../../_services/user.service';
import * as _ from 'lodash';
import { ProductsService } from '../../_services/products.service';
import { NgxCarousel } from 'ngx-carousel';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public tempProduct = { "_id": "", "name": "", "price": "", "rating": "", "brand": "", "sale": "", "new": "", "kind": "", "description": "", "mainImage": "", "slides": [], "ingerdients": [], "howto": "", "createAt": "" };
  public newProducts: Array<any> = [];
  public hotProducts: Array<any> = [];
  public inputValue: string = "";
  public saleProducts: Array<any> = [];
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  
  constructor(private elementRef: ElementRef, private router: Router, private productsService: ProductsService) {
    // router.events.subscribe(event => {
    //   if(event instanceof NavigationStart) {
    //     alert("ok");
    //   }
    // });
    if (document.getElementById("testScript")) document.getElementById("testScript").remove();
    var testScript = document.createElement("script");
    testScript.setAttribute("id", "testScript");
    testScript.setAttribute("src", "assets/js/front.js");
    document.body.appendChild(testScript);




  }
  ngAfterViewInit() {

  }
  ngOnInit() {
    this.productsService.getAll().subscribe(res => {
      this.saleProducts = this.getSaleProducts(res.data);
    //  this.newProducts = this.getNewProducts(res.data);
    //  console.log(res.data);
    //  console.log(this.newProducts);
     
     
     
    });
    this.productsService.getHotProducts().subscribe( res => { this.hotProducts = res.data});
    this.productsService.getNewProducts().subscribe( res => {
      this.newProducts = res.data;
    });
    // this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
              .ngxcarouselPoint {
                list-style-type: none;
                text-align: center;
                padding: 12px;
                margin: 0;
                white-space: nowrap;
                overflow: auto;
                box-sizing: border-box;
              }
              .ngxcarouselPoint li {
                display: inline-block;
                border-radius: 50%;
                border: 2px solid rgba(0, 0, 0, 0.55);
                padding: 4px;
                margin: 0 3px;
                transition-timing-function: cubic-bezier(.17, .67, .83, .67);
                transition: .4s;
              }
              .ngxcarouselPoint li.active {
                  background: #6b6b6b;
                  transform: scale(1.2);
              }
            `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
  private addScriptTagToElementDOM(pathToScript: string): void {
    let script: HTMLScriptElement = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", pathToScript);
    this.elementRef.nativeElement.appendChild(script);
  }

  getNewProducts(arr: Array<any>) {
    let newProducts = _.partition(arr, ['isNew', 'true']);
    console.log(newProducts);
    
    // newProducts = _.orderBy(newProducts, ['createAt'], ['desc']);
    newProducts.length = 10;
    return newProducts;
  }
  
  getSaleProducts(arr: Array<any>) {
    let saleProducts = _.partition(arr, res => {
     return res.sale > 0
    })[0];
    // console.log(saleProducts);
    
    saleProducts = _.orderBy(saleProducts, ['sale'], ['desc']);
    saleProducts.length = 10;
    return saleProducts;
  }
  pickItem(event) {
    event.preventDefault();
    this.inputValue = event.target.innerHTML;
  }
  public carouselTileLoad(evt: any) {

    // const len = this.carouselTileItems.length
    // if (len <= 30) {
    //   for (let i = len; i < len + 10; i++) {
    //     this.carouselTileItems.push(i);
    //   }
    // }

  }
}
