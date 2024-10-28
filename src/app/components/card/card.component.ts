import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnInit{

  @Input()
gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType: string = "Digital PS4"
  @Input()
  gamePrice:string = "R$ 399,90"
  

constructor() {

}

ngOnInit(): void{

}

}
