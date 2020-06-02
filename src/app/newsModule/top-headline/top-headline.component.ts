import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/common/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  newsObject: any = {}
  imgNotFound: string = 'https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png'

  constructor(
    private apiService: ApiService,
    private newsService: NewsService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.getTopHeadlines()
  }

  getTopHeadlines(){
    this.apiService.getTopHeadlines('topheadline').subscribe(
      res=>{
        if(res){
          this.newsObject = res
          this.spinner.hide()
        }
      },
      err=>{
        this.spinner.hide()
      }
    )

  }

  addArticle(news){
    if(news){
      this.newsService.storeArticle(news)
      this.router.navigate(['news/article'])
    }
  }

}
