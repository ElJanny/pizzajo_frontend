import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
 public ordersList: OrdersList[];
 public foodsList: FoodsList[];
 public citysList: CityList[];

 public pizzaNumber: number;
 public pizzaPrice: number;

 public hamburgerNumber: number;
 public hamburgerPrice: number;

 public gyrosNumber: number;
 public gyrosPrice: number;

 public orderNumber: number;
 public orderPrice: number;

 public ordersColumns: string[] = ['order_id','city','street','hnumber','quantity','price'];
 public foodsColumns: string[] =  ['food_name','food_price','quantity','all_price'];
 public citysColumns: string[] =  ['zipcode','city','quantity','all_price'];

 

  constructor(private _OrderService: OrderService) { }

  ngOnInit(): void {
    this._OrderService.getAllOrders().subscribe((data)=> this.fillAllList(data));
  }

  fillAllList(data: Object[]){
    console.log(data)
  this.pizzaNumber = 0
  this.pizzaPrice = 0

  this.hamburgerNumber = 0
  this.hamburgerPrice = 0

  this.gyrosNumber  = 0
  this.gyrosPrice = 0

  this.orderPrice =0
  this.orderNumber=0

    this.foodsList = [];
    this.ordersList = [];
    this.citysList = [];
    data.forEach(element => {
      this.fillOrdersList(element)
      this.fillFoodList(element)
      this.fillCityList(element)
    });

    this.orderLists();
  }

  fillOrdersList(element: Object){
    let talalt: boolean = false
    this.ordersList.forEach(elem =>{
      if(elem.order_id == element['order_id']){
      talalt=true;
      elem.quantity+= element['order_item_quantity']
      }
    })
    if(!talalt) this.ordersList.push({
      order_id: element['order_id'],
      city:element['city_name'],
      street:element['street_name'],
      hnumber:element['house_number'],
      quantity:element['order_item_quantity'],
      price:element['payment_amount']
    });
  }

  fillFoodList(element: Object){
    let talalt: boolean = false
    this.foodsList.forEach(elem =>{
      if(elem.food_name == element['food_name']){
        talalt = true;
        elem.quantity+= element['order_item_quantity'];
        elem.all_price+= element['order_item_price'];
      }
      });

      if(!talalt) this.foodsList.push({
        food_name:element['food_name'],
        food_price: element['order_item_price']/element['order_item_quantity'],
        quantity:element['order_item_quantity'],
        all_price:element['order_item_price']
      });

      switch(element['food_group_name'])
      {
        case 'pizza':
          this.pizzaNumber+= element['order_item_quantity']
          this.pizzaPrice+= element['order_item_price']
          break;
        case 'hamburger':
          this.hamburgerNumber+= element['order_item_quantity']
          this.hamburgerPrice+= element['order_item_price']
          break;
        case 'gyros':
          this.gyrosNumber+= element['order_item_quantity']
          this.gyrosPrice+= element['order_item_price']
            break;
      }

      this.orderNumber+=element['order_item_quantity']
      this.orderPrice+=element['order_item_price']
  }

  fillCityList(element: Object){
    let talalt: boolean =false
    this.citysList.forEach(elem =>{
        if(elem.zipcode == element['zipcode']){
          talalt =true
          elem.quantity += element['order_item_quantity']
          elem.all_price += element['order_item_price']
        }
    })
    if(!talalt) this.citysList.push({zipcode: element['zipcode'] ,city:element['city_name'],quantity:element['order_item_quantity'],all_price:element['order_item_price']})
  }

  orderLists(){
    this.ordersList.sort((b,a)=> a.order_id - b.order_id)
    this.foodsList.sort((b,a)=> a.all_price - b.all_price)
    this.citysList.sort((b,a)=> a.all_price - b.all_price)
  }

}

interface OrdersList {
  order_id: number;
  city:string;
  street: string;
  hnumber: number;
  quantity: number;
  price: number;
}

interface FoodsList {
  food_name: string;
  food_price: number;
  quantity: number;
  all_price: number;
}

interface CityList{
  city: string;
  zipcode:number;
  quantity: number;
  all_price: number;
}


