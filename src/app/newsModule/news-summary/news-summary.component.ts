import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/common/news.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news-summary',
  templateUrl: './news-summary.component.html',
  styleUrls: ['./news-summary.component.css']
})
export class NewsSummaryComponent implements OnInit {

  articleSummary: any 
  imgNotFound: string = 'https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png'

  constructor(
    private newsService: NewsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.getArticleSummary()
  }

  getArticleSummary(){
    this.newsService.getArticle().subscribe(
      res=>{
        if(res){
          this.articleSummary = res
          this.spinner.hide()
        }
      }
    )
  }

}
