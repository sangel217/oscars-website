import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nextOscar = new Date("Feb 9, 2020 20:00:00 EST");
  currentDate = new Date();
  distance: number = this.nextOscar.getTime() - this.currentDate.getTime();
  days: number = Math.floor(this.distance/(1000 * 60 * 60 * 24));
  hours: number = Math.floor((this.distance%(1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
  minutes: number = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds: number = Math.floor((this.distance % (1000 * 60)) / 1000);
}
