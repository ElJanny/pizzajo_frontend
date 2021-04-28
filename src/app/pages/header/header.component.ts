import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/core/models/food.model';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _CartService: CartService) { }
  purchases: Food[]
 

  ngOnInit(): void {
    this._CartService.getcartItems().subscribe(data => { this.purchases = data})
  }

  goToCart(){
    console.log(this.purchases)
  }
}
