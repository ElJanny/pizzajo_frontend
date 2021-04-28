import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name: string
  @Input() price: string
  @Input() summary: string
  @Input() id: number
  @Input() picture: HTMLImageElement
  @Output() purchase = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.purchase.emit(this.id)
  }

}
