import { Injectable } from '@angular/core';
import { Article } from './models/article.models';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {

  constructor(private database: AngularFireDatabase) { 
    this.articles = database.list('articles');
  }

  articles: FirebaseListObservable<any[]>;
  getArticles(){
    return this.articles;
  }

  addArticle(newArticle: Article){
    this.articles.push(newArticle);
  }

  getArticleById(albumId: string){
    return this.database.object('articles/' + articleId);
  }

}
