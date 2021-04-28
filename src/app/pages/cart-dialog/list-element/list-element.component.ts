import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() food_name
  @Input() food_price

  constructor() { }

  ngOnInit(): void {
  }

}
