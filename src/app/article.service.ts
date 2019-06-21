import { Injectable } from '@angular/core';
import { Article } from './models/article.models';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.articles = database.list('articles');
  }

  getArticles(){
    return this.articles;
  }

  addArticle(newArticle: Article){
    this.articles.push(newArticle);
  }

  getArticleById(articleId: string){
    return this.database.object('articles/' + articleId);
  }

}
