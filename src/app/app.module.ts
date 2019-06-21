import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { WinnerListComponent } from './winner-list/winner-list.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { RedCarpetComponent } from './red-carpet/red-carpet.component';
import { WinnerDetailComponent } from './winner-detail/winner-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RedCarpetDetailComponent } from './red-carpet-detail/red-carpet-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditOscarComponent } from './edit-oscar/edit-oscar.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WinnerListComponent,
    HomeComponent,
    RedCarpetComponent,
    WinnerDetailComponent,
    ArticleDetailComponent,
    RedCarpetDetailComponent,
    AdminComponent,
    EditOscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
