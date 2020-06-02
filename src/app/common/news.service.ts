import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class NewsService{
    newsArticle = new BehaviorSubject({})

    storeArticle(article){
        if(article){
            this.newsArticle.next(article)
        }
    }

    getArticle(){
        return this.newsArticle
    }
}