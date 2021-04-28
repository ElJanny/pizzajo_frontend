import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Food } from 'src/app/core/models/food.model';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit  {

  public purchases : Food[]

  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getcartItems().subscribe(data=> this.purchases = data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
