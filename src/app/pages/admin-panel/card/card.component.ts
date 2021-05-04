import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() category: string;
  @Input() quantity: number;
  @Input() all_price: number;
  constructor() { }

  ngOnInit(): void {
  }

}
