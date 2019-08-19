import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent implements OnInit {
cardData = [];
  constructor() { }

  ngOnInit() {
this.cardData = [{card:'card1',search: false},{card:'card2',search: false},{card:'card3',search: false},
{card:'card4',search: false},{card:'card5',search: false},{card:'card6',search: false},
{card:'card7',search: false},{card:'card8',search: false},{card:'card9',search: false}]
  }

  showSearch(card) {
if(card === 'card1') {
  this.cardData[0].search = true //!this.cardData[0].search;
} else if (card === 'card2') {
  this.cardData[1].search = true //!this.cardData[1].search;
}else if (card === 'card3') {
  this.cardData[2].search = true //!this.cardData[2].search;
}else if (card === 'card4') {
  this.cardData[3].search = true //!this.cardData[3].search;
}else if (card === 'card5') {
  this.cardData[4].search = true //!this.cardData[4].search;
}else if (card === 'card6') {
  this.cardData[5].search = true //!this.cardData[5].search;
}else if (card === 'card7') {
  this.cardData[6].search = true //!this.cardData[6].search;
}else if (card === 'card8') {
  this.cardData[7].search = true //!this.cardData[7].search;
}else if (card === 'card9') {
  this.cardData[8].search = true //!this.cardData[8].search;
  }
}

getweather(card) {
  
  if(card === 'card1') {
    this.cardData[0].search = true //!this.cardData[0].search;
  } else if (card === 'card2') {
    this.cardData[1].search = true //!this.cardData[1].search;
  }else if (card === 'card3') {
    this.cardData[2].search = true //!this.cardData[2].search;
  }else if (card === 'card4') {
    this.cardData[3].search = true //!this.cardData[3].search;
  }else if (card === 'card5') {
    this.cardData[4].search = true //!this.cardData[4].search;
  }else if (card === 'card6') {
    this.cardData[5].search = true //!this.cardData[5].search;
  }else if (card === 'card7') {
    this.cardData[6].search = true //!this.cardData[6].search;
  }else if (card === 'card8') {
    this.cardData[7].search = true //!this.cardData[7].search;
  }else if (card === 'card9') {
    this.cardData[8].search = true //!this.cardData[8].search;
    }
  }

}
