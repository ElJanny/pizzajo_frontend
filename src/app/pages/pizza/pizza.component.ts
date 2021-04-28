import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/core/models/food.model';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  Items: Food[]
  Pizzas: Food[] =[]
  openPizza: boolean
  searchPizza: string
  constructor(private _CartService: CartService) { }

  ngOnInit(): void {
    this.openPizza= false
    /*this.Items = [
      new carditem("pizza1","ez egy jo pizza",1500, 2),
      new carditem("pizza1","ez egy jo pizza",1500, 4),
      new carditem("szalámis","ez egy jo pizza",3000, 6),
      new carditem("sonkás","ez egy jo pizza",2500, 2),
      new carditem("szalonnás","ez egy jo pizza",4000, 6),
      new carditem("rántottPizza","ez egy jo pizza",10000, 2),
      new carditem("pizza1","ez egy jo pizza",1500, 12),
      new carditem("pizza1","ez egy jo pizza",1500, 2),
      new carditem("pizza1","ez egy jo pizza",1500, 2),
  ]*/

  this.Items =[
    {id: 1, food_group: 1, food_name: "Sonkás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 2, food_group: 1, food_name: "szalámis Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 3, food_group: 1, food_name: "kukoricás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 4, food_group: 1, food_name: "nutellás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 5, food_group: 2, food_name: "nutellás Gyros", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" }
  ]

  this.Items.forEach(element =>{
    if(element.food_group === 1){
      this.Pizzas.push(element)
    }
  })
  }

  setopenPizza(){
    this.openPizza=!this.openPizza
  }

  addToCart(event){
    
   this._CartService.addcartItems(this.Items.find(x => x.id == event))
  }
}
 
