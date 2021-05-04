import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";
import { SERVERURL } from "../../environment/SERVER";
import { cartItem } from "src/app/pages/cart-dialog/cart-dialog.component";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class OrderService{

    constructor(private http: HttpClient){}

    makeOrder(foods: cartItem[], customer: Object,amount: number){
        console.log(customer['firstname'])
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            }),
            params:{
                    fname: customer['firstname'],
                    lname:  customer['surname'],
                    phone:  customer['phonenumber'],
                    email:  customer['email'],
                    zip:    customer['zipcode'],
                    cityN:  customer['city'],
                    streetN: customer['street'],
                    hnumber: customer['housenumber'],
                    amount: amount.toString(),
                    type:   customer['paymentmode'],
                    note:   customer['note']
            }
        }
            this.http.post<Object>(SERVERURL + 'api/Order',null,httpOptions).subscribe(data => {
            this.makeOrderItem(foods);
        });
    }

    makeOrderItem(cartItems: cartItem[]){
        cartItems.forEach(element =>{
            const httpOptions={
                headers: new HttpHeaders({
                    'Content-Type':  'application/json',
                }),
                params:{
                    foodID: element.food_id.toString(),
                    quan: element.quantity.toString(),
                    price: element.food_price.toString()
                }
            }
           this.http.post<cartItem>(SERVERURL+'api/Order',null,httpOptions).subscribe(data=> console.log(data))
        })
    }

    getAllOrders(){
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })     
    }

    return this.http.get<Object[]>(SERVERURL+'api/Order', httpOptions)
    }
}
/*city: "sdff"
email: "fdsf"
firstname: "fgesd"
housenumber: 432
paymentmode: undefined
phonenumber: "4324"
street: "dfs"
surname: "fdsf"
zipcode: 54324*/