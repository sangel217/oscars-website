import { Component, OnInit } from '@angular/core';
import { Oscar } from './models/oscar.models';
import { Article } from './models/article.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent //implements OnInit//
 {
//need to figure out how to implement $scope in order to have an interval for countown clock
  // ngOnInit(){
  //   this.countdown;
  // }
  // nextOscar: Date;
  // currentDate: Date;
  // distance: number;
  // days: number;
  // hours: number;
  // minutes: number;
  // seconds: number;
  
  // countdown = setInterval(function($scope){
  //   console.log('running');
  //   this.nextOscar = new Date("Feb 9, 2020 20:00:00 EST");
  //   this.currentDate = new Date();

  //   this.distance = this.nextOscar.getTime() - this.currentDate.getTime();
  //   this.days = Math.floor(this.distance/(1000 * 60 * 60 * 24));
  //   this.hours = Math.floor((this.distance%(1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
  //   this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
  //   this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  //   if(this.distance<0){
  //     clearInterval(this.countdown);
  //     "it's Oscar time!"
  //   }
  // }, 1000);
  nextOscar = new Date("Feb 9, 2020 20:00:00 EST");
  currentDate = new Date();
  distance: number = this.nextOscar.getTime() - this.currentDate.getTime();
  days: number = Math.floor(this.distance/(1000 * 60 * 60 * 24));
  hours: number = Math.floor((this.distance%(1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
  minutes: number = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds: number = Math.floor((this.distance % (1000 * 60)) / 1000);
  
  

  masterOscarList: Oscar[] = [
    new Oscar('Best Picture', 'Green Book', 'Jim Burke, Charles B. Wessler, Brian Currie, Peter Farrelly, and Nick Vallelonga', new Date("Feb, 24,2019, 20:00:00 EST"), '../assets/greenbook.jpg'),
    new Oscar('Best Actress', 'The Favourite', 'Olivia Colman', new Date("Feb, 24,2019, 20:00:00 EST"), "../assets/oliviacolman.jpg"),
    new Oscar('Best Documentary Short', 'Period. End of Sentence', 'Rayka Zehtabchi and Melissa Berton', new Date("Feb 24,2019 20:00:00 EST"), "../assets/period.jpg")
  ];

  masterArticleList: Article[] = [
    new Article('Oscars 2019 Highlights', ' Jamie Wylie', 'The 91st Oscars has come to a close...', '../assets/highlights.jpg'),
    new Article('Oscars 2019: Green Book Wins Best Picture', 'Jamie Wylie', 'Green Book is the 2019 Oscar winner...', '../assets/greenbook.jpg'),
    new Article('Oscars in Memoriam 2019', 'Amy Barton', "Once again, The Oscars took time to...", '../assets/memoriam')
  ];
}
