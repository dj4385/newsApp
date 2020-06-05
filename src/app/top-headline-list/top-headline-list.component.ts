import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/api.service';

@Component({
  selector: 'app-top-headline-list',
  templateUrl: './top-headline-list.component.html',
  styleUrls: ['./top-headline-list.component.css']
})
export class TopHeadlineListComponent implements OnInit {

  headlineObj: any = {}
  headlineList: any = []

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.topHeadlineList()
  }

  topHeadlineList(){
    this.apiService.getTopHeadlines('topheadline').subscribe(
      res=>{
        if(res){
          this.headlineObj = res
          this.headlineList = this.headlineObj.topHeadlines.articles
          this.headlineList = this.headlineList.splice(0,5)
          console.log(this.headlineList)
        }
      }
    )
  }

}
