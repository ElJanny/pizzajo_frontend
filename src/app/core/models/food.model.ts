import { Identifiers } from "@angular/compiler";

export interface Food{
    id?: number;
    food_group?: number;
    food_name?: string;
    food_price?: number;
    food_ingredients?: string;
    food_picture?: Blob;
}