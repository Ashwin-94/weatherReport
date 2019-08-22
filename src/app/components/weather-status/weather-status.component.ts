import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent implements OnInit {
  cardData = [];
  cityName: string;
  constructor(private weather: WeatherService, private router: Router) { }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('cardData')) != undefined && JSON.parse(sessionStorage.getItem('cardData')) != '' && JSON.parse(sessionStorage.getItem('cardData')) != null) {
      this.cardData = JSON.parse(sessionStorage.getItem('cardData'));
    } else {
      this.cardData = [{ card: 'card1', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card2', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card3', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card4', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card5', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card6', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card7', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card8', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' },
      { card: 'card9', search: false, name: '', latitude: '', longitude: '', weather: '', temp: '', pressure: '', humidity: '', temp_min: '', temp_max: '', visibility: '', wind: '', clouds: '', error: '', background: '', icon: '' }]
    }
  }

  showSearch(card) {
    if (card === 'card1') {
      this.cardData[0].search = true //!this.cardData[0].search;
    } else if (card === 'card2') {
      this.cardData[1].search = true //!this.cardData[1].search;
    } else if (card === 'card3') {
      this.cardData[2].search = true //!this.cardData[2].search;
    } else if (card === 'card4') {
      this.cardData[3].search = true //!this.cardData[3].search;
    } else if (card === 'card5') {
      this.cardData[4].search = true //!this.cardData[4].search;
    } else if (card === 'card6') {
      this.cardData[5].search = true //!this.cardData[5].search;
    } else if (card === 'card7') {
      this.cardData[6].search = true //!this.cardData[6].search;
    } else if (card === 'card8') {
      this.cardData[7].search = true //!this.cardData[7].search;
    } else if (card === 'card9') {
      this.cardData[8].search = true //!this.cardData[8].search;
    }
  }

  getweather(card) {
    var city = (<HTMLInputElement>document.getElementById('input-' + card)).value;
    (<HTMLInputElement>document.getElementById('input-' + card)).value = '';
    var cardNumber = parseInt(card.slice(4, 5)) - 1;
    this.resetData(cardNumber);
    this.weather.getWeatherData(city).subscribe(Response => {
      if (Response) {
        this.cardData[cardNumber].name = Response.name;
        this.cardData[cardNumber].latitude = Response.coord.lon;
        this.cardData[cardNumber].longitude = Response.coord.lat;
        this.cardData[cardNumber].weather = Response.weather;
        this.cardData[cardNumber].temp = Response.main.temp;
        this.cardData[cardNumber].pressure = Response.main.pressure;
        this.cardData[cardNumber].humidity = Response.main.humidity;
        this.cardData[cardNumber].temp_min = Response.main.temp_min;
        this.cardData[cardNumber].temp_max = Response.main.temp_max;
        this.cardData[cardNumber].visibility = Response.visibility;
        this.cardData[cardNumber].wind = Response.wind;
        this.cardData[cardNumber].clouds = Response.clouds.all;
        if (Response.weather[0].main === 'Clear') {
          this.cardData[cardNumber].background = 'clear-sky'
        } else if (Response.weather[0].main === 'Rain') {
          this.cardData[cardNumber].background = 'rain'
        } else if (Response.weather[0].main === 'Clouds') {
          this.cardData[cardNumber].background = 'cloudy'
        } else if (Response.weather[0].main === 'Snow') {
          this.cardData[cardNumber].background = 'snow'
        } else if (Response.weather[0].main === 'Drizzle') {
          this.cardData[cardNumber].background = 'drizzle'
        } else if (Response.weather[0].main === 'Thunderstorm') {
          this.cardData[cardNumber].background = 'thunderstorm'
        } else {
          this.cardData[cardNumber].background = 'atmos'
        }
        sessionStorage.setItem('cardData', JSON.stringify(this.cardData));
      }
    }, err => {
      this.cardData[cardNumber].error = err.error.message;
    });
  }

  resetData(index) {
    this.cardData[index].name = '';
    this.cardData[index].latitude = '';
    this.cardData[index].longitude = '';
    this.cardData[index].weather = '';
    this.cardData[index].temp = '';
    this.cardData[index].pressure = '';
    this.cardData[index].humidity = '';
    this.cardData[index].temp_min = '';
    this.cardData[index].temp_max = '';
    this.cardData[index].visibility = '';
    this.cardData[index].wind = '';
    this.cardData[index].clouds = '';
    this.cardData[index].error = '';
    this.cardData[index].background = '';
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/logout']);
  }
}
