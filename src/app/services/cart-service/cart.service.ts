import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from 'src/app/core/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Food[]>([]);

  public getcartItems(): Observable<Food[]>{
    return this.cartItems.asObservable()
  }

  public addcartItems(value){
    console.log(value)
    this.cartItems.next(this.cartItems.getValue().concat(value));
  }
  
  public setcartItems(value){
    this.cartItems.next(value)
  }
  constructor() { }
}
