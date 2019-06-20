import { Component, Input} from '@angular/core';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articleList: Article[] = [
    new Article('Oscars 2019 Highlights', ' Jamie Wylie', 'The 91st Oscars has come to a close...', '../assets/highlights.jpg'),
    new Article('Oscars 2019: Green Book Wins Best Picture', 'Jamie Wylie', 'Green Book is the 2019 Oscar winner...', '../assets/greenbook.jpg'),
    new Article('Oscars in Memoriam 2019', 'Amy Barton', "Once again, The Oscars took time to...", '../assets/memoriam')
  ];

}
