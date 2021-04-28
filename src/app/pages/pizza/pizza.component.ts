import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  Items: carditem[]
  openPizza: boolean
  searchPizza: string
  constructor(private _CartService: CartService) { }

  ngOnInit(): void {
    this.openPizza= false
    this.Items = [
      new carditem("pizza1","ez egy jo pizza",1500, 2),
      new carditem("pizza1","ez egy jo pizza",1500, 4),
      new carditem("szalámis","ez egy jo pizza",3000, 6),
      new carditem("sonkás","ez egy jo pizza",2500, 2),
      new carditem("szalonnás","ez egy jo pizza",4000, 6),
      new carditem("rántottPizza","ez egy jo pizza",10000, 2),
      new carditem("pizza1","ez egy jo pizza",1500, 12),
      new carditem("pizza1","ez egy jo pizza",1500, 2),
      new carditem("pizza1","ez egy jo pizza",1500, 2),
  ]
  }

  setopenPizza(){
    this.openPizza=!this.openPizza
  }

  addToCart(event){
    console.log(event)
   // this._CartService.addcartItems(1)
  }
}
 
class carditem{
  constructor(public name,public summary,public price,public id){}
}