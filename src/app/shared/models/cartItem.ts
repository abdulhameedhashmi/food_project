import { Foods } from "./food";

export class cartItem{
   /* price!: number;
    constructor(food:Foods){
        this.food = food;*/
      constructor(food:Foods){
        this.food = food

      }  
      food:Foods;
      quantity:number = 1;
      get price():number{
        return this.food.price * this.quantity;
      }

    
  

}