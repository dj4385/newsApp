import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class ApiService{

    api_url = 'https://news-api-v1.herokuapp.com/v1/'

    constructor(
        private httpClient: HttpClient 
    ){}

    getTopHeadlines(newsType){
        return this.httpClient.post(`${this.api_url}${newsType}`,{})
    }
}