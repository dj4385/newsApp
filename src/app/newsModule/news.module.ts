import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CovidNewsComponent } from './covid-news/covid-news.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { CountryComponent } from './country/country.component';
import { MylocationComponent } from './mylocation/mylocation.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NewsSummaryComponent } from './news-summary/news-summary.component';

const route: Routes = [
    {
        path: 'covid19',
        component: CovidNewsComponent
    },
    {
        path: 'topHeadlines',
        component: TopHeadlineComponent
    },
    {
        path: 'country',
        component: CountryComponent
    },
    {
        path: 'myLocation',
        component: MylocationComponent
    },
    {
        path: 'technology',
        component: TechnologyComponent
    },
    {
        path: 'business',
        component: BusinessComponent
    },
    {
        path: 'entertainment',
        component: EntertainmentComponent
    },
    {
        path: 'sports',
        component: SportsComponent
    },
    {
        path: 'article',
        component: NewsSummaryComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        NgxSpinnerModule,
        RouterModule.forChild(route)
    ],
    declarations: [
        CovidNewsComponent,
        TopHeadlineComponent,
        CountryComponent,
        MylocationComponent,
        TechnologyComponent,
        BusinessComponent,
        EntertainmentComponent,
        SportsComponent,
        NewsSummaryComponent
    ]
})

export class NewsModule{}