import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-covid-news',
  templateUrl: './covid-news.component.html',
  styleUrls: ['./covid-news.component.css']
})
export class CovidNewsComponent implements OnInit {

  newsObject: any = {}
  imgNotFound: string = 'https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png'

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCovidNews()
  }

  getCovidNews(){
    this.apiService.getTopHeadlines('COVID19').subscribe(
      res=>{
        if(res){
          this.newsObject = res
        }
      }
    )
  }
}
