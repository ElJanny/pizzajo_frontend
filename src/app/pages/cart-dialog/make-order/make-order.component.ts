import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  @Output() makeOrder = new EventEmitter<Object>();
  @Output() back = new EventEmitter();
  public firstname: string ;
  public surname: string ;
  public phonenumber: string ;
  public email: string ;
  public zipcode: string ;
  public city: string ;
  public street: string ;
  public housenumber: string ;
  public paymentmode: number;
  public note: string;
  constructor() { }

  ngOnInit(): void {
  }

  order(): void{
    this.makeOrder.emit({
      firstname: this.firstname,surname: this.surname,phonenumber: this.phonenumber,email: this.email,
      zipcode: this.zipcode,city: this.city,street: this.street,housenumber: this.housenumber,paymentmode: this.paymentmode, note: this.note})
  }

  goback(): void{
    this.back.emit()
  }

}
