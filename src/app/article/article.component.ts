import { Component, OnInit} from '@angular/core';
import { Article } from '../models/article.models';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle: Article){
    // this.router.navigate(['articles', clickedArticle.$key]);
  }
  // articleList: Article[] = [
  //   new Article('Oscars 2019 Highlights', ' Jamie Wylie', 'The 91st Oscars has come to a close...', '../assets/highlights.jpg'),
  //   new Article('Oscars 2019: Green Book Wins Best Picture', 'Jamie Wylie', 'Green Book is the 2019 Oscar winner...', '../assets/greenbook.jpg'),
  //   new Article('Oscars in Memoriam 2019', 'Amy Barton', "Once again, The Oscars took time to...", '../assets/memoriam')
  // ];

}
