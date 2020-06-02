import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  newsObject: any = {}
  imgNotFound: string = 'https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png'

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getSportsNews()
  }

  getSportsNews(){
    this.apiService.getTopHeadlines('sports').subscribe(
      res=>{
        if(res){
          this.newsObject = res
        }
      }
    )
  }

}
