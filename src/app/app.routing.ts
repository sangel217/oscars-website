import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WinnerListComponent } from './winner-list/winner-list.component';
import { ArticleComponent } from './article/article.component';
import { RedCarpetComponent } from './red-carpet/red-carpet.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'winners',
        component: WinnerListComponent
    },
    {
        path: 'news',
        component: ArticleComponent
    },
    {
        path: 'red-carpet',
        component: RedCarpetComponent
    } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);