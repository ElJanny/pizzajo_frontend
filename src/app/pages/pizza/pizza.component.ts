import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Food } from 'src/app/core/models/food.model';
import { FoodService } from 'src/app/core/services/food.service';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit{
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
  constructor(
    private _CartService: CartService,
    private _FoodService: FoodService) { }

  ngOnInit(): void {
    this.openPizza = false
    this.openGyros = false
    this.openHamburger = false
    this.Items=[]
    this._FoodService.getFoods("1").subscribe(data =>
       {this.Pizzas=data
        this.Items.concat(this.Pizzas)})

    this._FoodService.getFoods("2").subscribe(data => 
      {this.Hamburgers=data
        this.Items.concat(this.Hamburgers)})

    this._FoodService.getFoods("3").subscribe(data => 
      {this.Gyros=data
        this.Items.concat(this.Gyros)})
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
 
