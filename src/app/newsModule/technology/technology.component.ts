import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/common/news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

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
    this.getTechNews()
  }

  getTechNews(){
    this.apiService.getTopHeadlines('technology').subscribe(
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
