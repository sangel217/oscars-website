import { Component, OnInit} from '@angular/core';
import { Article } from '../models/article.models';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle){
    this.router.navigate(['articles', clickedArticle.$key]);
  }

}
