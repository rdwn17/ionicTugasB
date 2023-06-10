import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude:any =0;
  longitude:any =0;
  form = {
    nama : '',
    nim : '',
    alamat : ''

  };
  countrycode: string = "62";
  number: string = "85155098559";
  telegramUrl: string = "https://t.me/";
  telegramUsername: string = "erdwn17";
  name: string = "";
  nim: string = "";
  class: string = "";
  message: string = "";
  directUrl: string | undefined;
  telegram: any;





  constructor(
    private geolocation: Geolocation
  ) {}
  sendTele(){
    const telegramMessage = `Hi, my name is ${this.name}. NIM: ${this.nim}. Class: ${this.class}. ${this.message}`;
    this.directUrl = `${this.telegramUrl}${this.telegramUsername}?text=${encodeURIComponent(telegramMessage)}`;
  }

  sendMessage() {
    const message = 'Hello, this is a test message.';
    const username = 'erdwn17';

    this.telegram.shareText(message, username)
      .then(() => {
        console.log('Message sent successfully.');
      })
      .catch((error: any) => {
        console.log('Error sending message:', error);
      });
  }
  // async getCurrentLocation() {
  //   try {
  //     const position = await Geolocation.getCurrentPosition();
  //     this.latitude = position.coords.latitude;
  //     this.longitude = position.coords.longitude;
  //   } catch (error) {}
  // }
}
