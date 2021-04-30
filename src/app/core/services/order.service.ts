import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
    providedIn: "root"
})
export class OrderService{

    constructor(http: HttpClient){}

    makeOrder(foods: Food[], customer: Object): void{
        console.log(foods)
        console.log(customer)
    }
}