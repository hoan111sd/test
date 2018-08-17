import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../_services/products.service';
declare var Cookies: any;
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  userID;
  productsWishList;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.userID = this.getUserID();
    this.productsService.getCart(this.userID).subscribe(res => {
        if(res) {
          this.productsWishList = res.product;
        }
       }
      )
  }
  
  getUserID() {
    if (Cookies.get('id')) this.userID = Cookies.get('id');
    else if (Cookies.get('idGG')) this.userID = Cookies.get('idGG');
    else if (Cookies.get('idFB')) this.userID = Cookies.get('idFB');
    return this.userID;
  }
}
