import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  newsObject: any = {}

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
