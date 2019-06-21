import { Component, OnInit } from '@angular/core';
import { OscarService } from '../oscar.service';
import { Oscar } from '../models/oscar.models';
import { Article } from '../models/article.models';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [OscarService, ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private oscarService: OscarService, private articleService: ArticleService) { }

  ngOnInit() {
  }

  submitWinner(category: string, movie: string, name: string, oscarYear: Date, image: string){
    var newOscar: Oscar = new Oscar(category, movie, name, oscarYear, image);
    this.oscarService.addOscar(newOscar);
  }

  submitArticle(title: string, author: string, report: string, image: string, oscarDate: Date){
    var newArticle: Article = new Article(title, author, report, image, oscarDate);
    this.articleService.addArticle(newArticle);
  }

}
