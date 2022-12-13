import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*import { pipe } from 'rxjs';
import { map } from 'rxjs';*/
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;

  }
  getAllFoodByTag(tag: string): Foods[]{
  
  return tag == "All" ? 

    this.getAll() : this.getAll().filter(food => food.tags?.
    includes(tag)); 
    //you can write this statement is very simple type let's do it.

    }
getAllTag():Tag[]{
  return [
    
    {name:'All',count: 1},
    {name:'FastFood',count: 2},
    {name:'Pizza',count: 3},
    {name:'Lunch',count: 4},
    {name:'slowfood',count:5},
    {name:'humberger',count:6},
    {name:'fry',count:7},
    {name:'soup',count:8}
     
  ];
}
getAll():Foods[]{
  return[
    {
      id: 1,
      name:'sandwich',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origins:['italy'],
      star:4.5,
      imageUrl:'/assets/fastfood1.jpeg',
      tags:['fastfood'],
    },
    {
      id:2,
      name:'chicken soup',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['italy'],
      star:4.5,
      imageUrl:'/assets/fastfood2.jpeg',
      tags:['Slowfood'],
    },
    {
      id:3,
      name:'Taco',
      cookTime:'10-15',
      price:10,
      favorite:false,
      origins:['India','USA'],
      star:4.5,
      imageUrl: '/assets/fastfood4.jpeg',
      tags:['fastfood','pizza','lunch'],
    },
    {
      id:4,
      name:'pizza',
      cookTime:'20-25',
      price:10,
      favorite:false,
      origins:['France','India','America'],
      star:4.5,
      imageUrl:'/assets/fastfood3.jpeg',
      tags:['fastfood','pizza','lunch'],
    },
    {
      id:5,
      name:'Burger',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['japan,america'],
      star:4.5,
      imageUrl:'/assets/fastfood5.jpeg',
      tags:['fastfood','pizza','lunch'],
    },
    {
      id:6,
      name:'vegetables pizza',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['india'],
      star:4.5,
      imageUrl:'/assets/fastfood7.jpeg',
      tags:['fastfood','pizza','lunch'],
    },
    {
      id:7,
      name:'chicken Lollypop',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['america'],
      star:4.5,
      imageUrl:'/assets/fastfood6.jpeg',
      tags:['Slowfood','lunch'],
    },
    {
      id:8,
      name:'humberger',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['italy'],
      star:4.5,
      imageUrl:'/assets/fastfood8.jpeg',
      tags:['fastfood','lunch'],
    }
 
  ];

}
}




 
