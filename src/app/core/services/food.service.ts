import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";
import { SERVERURL } from "../../environment/SERVER"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FoodService{

    constructor(private http: HttpClient){}

    getFoods(food_group_id: string): Observable<Food[]>{
        const httpOptions ={
            params:{
                food_group_id: food_group_id
            },
            'Access-Control-Allow-Origin': '*'
        }
        return this.http.get<Food[]>(SERVERURL,httpOptions)
    }
}