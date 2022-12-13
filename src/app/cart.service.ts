import { Injectable } from '@angular/core';
import { Foods } from './shared/models/food';
import { cart } from './shared/models/cart';
import { cartItem } from './shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart:cart = new cart();
addToCart(food:Foods) :void{
  let carItem = this.cart.items.find(item =>item.food.id === food.id)
  if(carItem){
    this.changeQuantity(food.id, carItem.quantity +1)
    return;

  }
  this.cart.items.push(new cartItem(food));
}
removeFromCart(foodId:number):void{
  this.cart.items = this.cart.items.filter(item =>item.food.id !=foodId)
}
changeQuantity(quantity:number,foodId:number){
  let cartItem = this.cart.items.find(item =>item.food.id === foodId);
  if(!cartItem) return;
  cartItem.quantity = quantity;

}
getCart():cart{
  return this.cart;
}

}


