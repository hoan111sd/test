import { Component, OnInit } from "@angular/core";
import { Product } from "../../_models/index";
import * as _ from "lodash";
import { PaginationService } from "../../_services/pagination.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { ProductsService } from "../../_services/products.service";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  allProduct: Array<any> = [];
  pager: any = {};
  productsForOnePage: Array<any> = [];
  filterProducts: Array<any> = [];
  kind = "";
  type = "";
  pagination = [];
  currentPage;
  currentProducts;
  allProducts;
  constructor(
    private pagerService: PaginationService,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    // productsService.getAll().subscribe(res => {
    //   this.allProduct = res.data;
    //   _.map(this.allProduct, res => { res.price = parseFloat(res.price); res.sale = parseFloat(res.sale); });
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get("type") || "Tất cả sản phẩm";
      this.kind = params.get("kind") || "Tất cả sản phẩm";
      if (this.type === "shop") {
        productsService.getCategory(this.kind).subscribe(res => {
          this.currentPage = Number(res.currentPage);
          this.currentProducts = Number(res.data.length);
          this.allProducts = Number(res.total);
          this.allProduct = res.data;

          for (let i = 1; i <= res.totalPages; i++) {
            this.pagination.push(i);
          }
        });
      }
      if (this.type === "brands") {
        productsService.getBrandProducts(this.kind).subscribe(res => {
          this.currentPage = Number(res.currentPage);
          this.currentProducts = Number(res.data.length);
          this.allProducts = Number(res.total);
          this.allProduct = res.data;

          for (let i = 1; i <= res.totalPages; i++) {
            this.pagination.push(i);
          }
        });
      }
      if (this.type === "Tất cả sản phẩm" || this.kind === "Tất cả sản phẩm") {
        productsService.getAll().subscribe(res => {
          this.currentPage = Number(res.currentPage);
          this.currentProducts = Number(res.data.length);
          this.allProducts = Number(res.total);
          console.log(typeof this.currentPage);

          this.allProduct = res.data;
          for (let i = 1; i <= res.totalPages; i++) {
            this.pagination.push(i);
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

  ngOnInit() {}
  sortBy(event) {
    let value = event.target.value;
    if (value === "Name") {
      this.allProduct = _.sortBy(this.productsForOnePage, ["name"]);
    }
    if (value === "Price") {
      this.allProduct = _.sortBy(this.productsForOnePage, ["price"]);
    }
  }
  // setPage(page: number) {
  //   if (page < 1) {
  //     return;
  //   }
  //   this.pager = this.pagerService.getPager(this.allProduct.length, page);
  //   this.productsForOnePage = this.allProduct.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }
  setPage(page: number) {
    this.currentPage = page;
    this.allProduct = [];
    this.productsService.getProductsPage(page).subscribe(res => {
      this.allProduct = res.data;
    });
  }
}
