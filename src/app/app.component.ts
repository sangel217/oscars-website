import { Component } from '@angular/core';
import { Oscar } from './models/oscar.models';
import { Article } from './models/article.models';

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

  masterOscarList: Oscar[] = [
    new Oscar('Best Picture', 'Green Book', 'Jim Burke', new Date("Feb, 24,2019, 20:00:00 EST")),
    new Oscar('Best Actress', 'The Favourite', 'Olivia Colman', new Date("Feb, 24,2019, 20:00:00 EST")),
    new Oscar('Best Documentary Short', 'Period. End of Sentence', 'Rayka Zehtabchi and Melissa Berton', new Date("Feb 24,2019 20:00:00 EST"))
  ];

  masterArticleList: Article[] = [
    new Article('Oscars 2019 Highlights', ' Jamie Wylie', 'The 91st Oscars has come to a close...'),
    new Article('Oscars 2019: Green Book Wins Best Picture', 'Jamie Wylie', 'Green Book is the 2019 Oscar winner...'),
    new Article('Oscars in Memoriam 2019', 'Amy Barton', "Once again, The Oscars took time to...")
  ];
}
