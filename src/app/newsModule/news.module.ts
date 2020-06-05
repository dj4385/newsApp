import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

const route: Routes = [
    {
        path: 'topHeadlines',
        component: TopHeadlineComponent
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
        TopHeadlineComponent
    ]
})

export class NewsModule{}