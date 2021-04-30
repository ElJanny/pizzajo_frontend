import { Component, Inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { element } from 'protractor';
import { Food } from 'src/app/core/models/food.model';
import { OrderService } from 'src/app/core/services/order.service';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit  {
  @ViewChildren(MatTable) matTables : QueryList<MatTable<cartItem[]>>;
  public price: number = 0
  public purchases : cartItem[] =[]
  private fooditems: Food[] 
  public displayedColumns: string[] = ['food_name', 'food_price', 'Number', 'Delete'];
  public state: boolean = false
  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    private cartService: CartService,
    private _OrderService: OrderService) {}
  ngOnInit(): void {
    this.cartService.getcartItems().subscribe(data=>  this.filter(data))
  }

  filter(foods: Food[]): void {
    this.price = 0
    this.fooditems=[]
    this.purchases=[]
    foods.forEach(element =>
      {
          this.price += element.food_price
          this.fooditems.push({id: element.id, food_name: element.food_name, food_price: element.food_price, food_ingredients: element.food_ingredients, food_group: element.food_group, food_picture: element.food_picture})
          let equal: boolean = false;
          this.purchases.forEach(elem =>{
            if (element.id === elem.id){
              equal=true;
              elem.food_price+= element.food_price;
              elem.quantity++;
            }
          })
          if(equal===false){
            let tmpItem : cartItem = {id: element.id, food_name: element.food_name, food_price: element.food_price, quantity: 1, element_price: element.food_price}
            this.purchases.push(tmpItem)
          }
      })
  }


  refreshFunc(): void{
    this.matTables.toArray().forEach(each => each.renderRows());
   }


  removeQuantity(element: cartItem): void{
    for(let i =0 ; i<this.fooditems.length;++i){
      if(this.fooditems[i].id === element.id){
        this.fooditems.splice(i,1);
        break
      }
    }
    this.cartService.setcartItems(this.fooditems)
  }

  makeOrder(): void{
    this.state = !this.state;
  }

  sendOrder(event: Object): void{
      this._OrderService.makeOrder(this.fooditems,event)
      this.cartService.setcartItems([])
      this.dialogRef.close()
  }
}

interface cartItem extends Food{
  quantity?: number;
  element_price?: number;
}
