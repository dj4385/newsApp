import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  newsObject: any = {}

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getEntertainmentNews()
  }

  getEntertainmentNews(){
    this.apiService.getTopHeadlines('entertainment').subscribe(
      res=>{
        if(res){
          this.newsObject = res
        }
      }
    )
  }

}
