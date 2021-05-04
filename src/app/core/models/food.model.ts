import { Identifiers } from "@angular/compiler";

export interface Food{
    food_id?: number;
    food_group?: number;
    food_name?: string;
    food_price?: number;
    food_ingredients?: string;
    food_picture?: Blob;
}