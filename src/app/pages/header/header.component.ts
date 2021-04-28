import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Food } from 'src/app/core/models/food.model';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _CartService: CartService,public dialog: MatDialog) { }
  purchases: Food[]
 

  ngOnInit(): void {
    this._CartService.getcartItems().subscribe(data => { this.purchases = data})
  }

  goToCart(){
    console.log(this.purchases)
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '75%',
      height: '75%'
    });

  }
}
