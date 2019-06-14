import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { WinnerListComponent } from './winner-list/winner-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WinnerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
