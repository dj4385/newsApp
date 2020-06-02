import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  newsObject: any = {}

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getTopHeadlines()
  }

  getTopHeadlines(){
    this.apiService.getTopHeadlines('topheadline').subscribe(
      res=>{
        if(res){
          this.newsObject = res
        }
      }
    )

  }

}
