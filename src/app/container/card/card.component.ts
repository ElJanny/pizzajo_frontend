import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


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
  @Input() picture: string
  @Output() purchase = new EventEmitter<number>();
  public titleImageurl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.titleImageurl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+ this.picture)
  }

  addToCart(){
    this.purchase.emit(this.id)
  }

}
