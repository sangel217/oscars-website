import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WinnerListComponent } from './winner-list/winner-list.component';
import { ArticleComponent } from './article/article.component';
import { RedCarpetComponent } from './red-carpet/red-carpet.component';
import { WinnerDetailComponent } from './winner-detail/winner-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RedCarpetDetailComponent } from './red-carpet-detail/red-carpet-detail.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'oscars',
        component: WinnerListComponent
    },
    {
        path: 'news',
        component: ArticleComponent
    },
    {
        path: 'red-carpet',
        component: RedCarpetComponent
    },
    {
        path: 'oscars/:id',
        component: WinnerDetailComponent
    },
    {
        path: 'articles/:id',
        component: ArticleDetailComponent
    },
    {
        path: 'red-carpets/:id',
        component: RedCarpetDetailComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);