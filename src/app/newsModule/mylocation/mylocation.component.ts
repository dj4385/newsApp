import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/common/news.service';

@Component({
  selector: 'app-mylocation',
  templateUrl: './mylocation.component.html',
  styleUrls: ['./mylocation.component.css']
})
export class MylocationComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
    },1000)
  }

  addArticle(news){
    if(news){
      this.newsService.storeArticle(news)
      this.router.navigate(['news/article'])
    }
  }
}
