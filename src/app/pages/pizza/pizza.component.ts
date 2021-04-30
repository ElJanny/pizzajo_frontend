import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/core/models/food.model';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  //All Food
  private Items: Food[]
  public Pizzas: Food[] =[]
  public Hamburgers: Food[] = []
  public Gyros: Food[] = []

  public openPizza: boolean
  public searchPizza: string
  public openHamburger: boolean
  public searchHamburger: string
  public openGyros: boolean
  public searchGyros: string
  constructor(private _CartService: CartService) { }

  ngOnInit(): void {
    this.openPizza = false
    this.openGyros = false
    this.openHamburger = false

  this.Items =[
    {id: 1, food_group: 1, food_name: "Sonkás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 2, food_group: 1, food_name: "szalámis Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 3, food_group: 1, food_name: "kukoricás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 4, food_group: 1, food_name: "nutellás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 5, food_group: 2, food_name: "nutellás Gyros", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 6, food_group: 1, food_name: "Sonkás Pizza", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 7, food_group: 3, food_name: "szalámis Hamburger", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 8, food_group: 2, food_name: "kukoricás Gyros", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 9, food_group: 2, food_name: "nutellás Gyros", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" },
    {id: 10, food_group: 3, food_name: "nutellás Hamburger", food_price: 2500, food_ingredients: "paprika,szalámi,kolbász" }
  ]

  this.Items.forEach(element =>{
    switch(element.food_group){
      case 1:
        this.Pizzas.push(element)
        break;
      case 2:
        this.Gyros.push(element)
        break;
      case 3:
        this.Hamburgers.push(element)
        break;
    }
  })
  }

  setopenPizza(){
    this.openPizza=!this.openPizza
  }

  setopenHamburger(){
    this.openHamburger=!this.openHamburger
  }

  setopenGyros(){
    this.openGyros=!this.openGyros
  }

  addToCart(event){
    
   this._CartService.addcartItems(this.Items.find(x => x.id == event))
  }
}
 
