import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/common/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

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
