import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsObject: any = {}
  newsType: string

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      param=>{
        this.newsType = param.category
      }
    )
    
    // this.getNews()
  }

  getNews(){
    this.apiService.getTopHeadlines(this.newsType).subscribe(
      res=>{
        if(res){
          this.newsObject = res
          console.log(this.newsObject)
        }
      }
    )
  }

}
