import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { WinnerListComponent } from './winner-list/winner-list.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { RedCarpetComponent } from './red-carpet/red-carpet.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WinnerListComponent,
    HomeComponent,
    RedCarpetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
