import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { cart } from '../shared/models/cart';
import { cartItem } from '../shared/models/cartItem';
/*import { CartServiceService } from '../cart-service.service';*/


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  
  cart!:cart;
  constructor(private cartservice:CartserviceService) { 
   this.setCart();
  }
   
  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartservice.getCart();
  }
  removeFromCart(cartItme:cartItem){
    this.cartservice.removeFromCart(cartItme.food.id);
    this.setCart();   //instance load data
  }
  changeQuantity(cartItem:cartItem, quantityInString:string){
      
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  }



  



