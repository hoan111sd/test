import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../_services/products.service";
import * as _ from "lodash";
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public allProduct;
  public searchText = "";
  public searchForm;
  public brandsAreChose = "";
  public brands = [
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
  public kinds = ["face", "eye", "lips", "hair", "skin", "accessories", "body"];
  public productsSearch = [];
  public descriptionInput = "";
  // public products2 = [];
  constructor(
    private productsService: ProductsService,
    private form: FormBuilder
  ) {}

  ngOnInit() {
    this.productsService.getAll().subscribe(res => {
      this.allProduct = res.data;
    });
    this.searchForm = this.form.group({
      brand: this.form.array([]),
      kind: this.form.array([]),
      description: ["", Validators.required]
    });
    this.productsService.getCategories().subscribe(res => {
      this.kinds = res.data;
      this.kinds = res.data;
    });
    this.productsService.getBrands().subscribe(res => {
      this.brands = res.data;
    });
  }

  search() {
    // console.log(_.filter(this.allProduct, function (product) { return product.name.indexOf("PA++") !== -1; }));
    let productsForBrands = [];
    let productsForKinds = [];

    if (this.searchForm.value.brand.length) {
      _.map(this.searchForm.value.brand, brand => {
        productsForBrands = _.concat(
          productsForBrands,
          _.filter(this.allProduct, { brand: brand.name })
        );
      });
    } else productsForBrands = this.allProduct;

    if (this.searchForm.value.kind.length) {
      _.map(this.searchForm.value.kind, kind => {
        productsForKinds = _.concat(
          productsForKinds,
          _.filter(productsForBrands, { category: kind.name })
        );
      });
    } else productsForKinds = productsForBrands;

    this.productsSearch = [];
    if (this.searchForm.value.description) {
      this.productsSearch = _.filter(productsForKinds, product => {
        if (
          this.isMatch(product.name, this.searchForm.value.description) ||
          this.isMatch(product.name, this.searchForm.value.description) ||
          this.isMatch(
            product.description,
            this.searchForm.value.description
          ) ||
          this.isMatch(
            product.ingerdients,
            this.searchForm.value.description
          ) ||
          this.isMatch(product.info, this.searchForm.value.description)
        )
          return product;
      });
    } else {
      this.productsSearch = productsForKinds;
    }
    console.log(this.productsSearch);
  }

  search2(value) {
    let text = value.description;
    this.productsService.search2(text).subscribe(res => {
      console.log(res);
      this.productsSearch = res.data;
    });
  }

  onChangeBrandChoosing(brand: string, isChecked: boolean) {
    const brandFormArray = <FormArray>this.searchForm.controls.brand;

    if (isChecked) {
      brandFormArray.push(new FormControl(brand));
    } else {
      let index = brandFormArray.controls.findIndex(x => x.value == brand);
      brandFormArray.removeAt(index);
    }
  }

  onChangeKindChoosing(kind: string, isChecked: boolean) {
    const kindFormArray = <FormArray>this.searchForm.controls.kind;

    if (isChecked) {
      kindFormArray.push(new FormControl(kind));
    } else {
      let index = kindFormArray.controls.findIndex(x => x.value == kind);
      kindFormArray.removeAt(index);
    }
  }

  formatName(text) {
    let newText = text
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
      .replace(/đ/g, "d")
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
      .replace(/ì|í|ị|ỉ|ĩ/g, "i")
      .replace(/[^a-zA-Z0-9\ ]/g, "");

    return newText;
  }

  isMatch(text1, text2) {
    if (text1) {
      text2 = text2.toLowerCase();
      text2 = this.formatName(text2);
      let check = false;
      if (typeof text1 === "object") {
        _.map(text1, item => {
          item = item.toLowerCase();
          item = this.formatName(item);
          // console.log(item);
          // console.log(text2);

          if (item.indexOf(text2) !== -1) {
            check = true;
          }
        });
      } else {
        text1 = text1.toLowerCase();
        text1 = this.formatName(text1);
        if (text1.indexOf(text2) !== -1) check = true;
        else check = false;
      }
      if (check) return 1;
      else return 0;
    }
    return 0;
  }
}
