import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Foods } from 'src/app/shared/models/food';
//import { RatingModule} from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Foods:Foods[]= [];
  
  constructor(private fs:ApiService,private router:ActivatedRoute) { }

  ngOnInit(): void {
  this.router.params.subscribe(params =>{
    if(params['searchItem'])
    this.Foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
   else if(params['tag'])
   this.Foods=this.fs.getAllFoodByTag(params['tag'])
   
    else
    this.Foods = this.fs.getAll();
    
  })
    
}
} 
