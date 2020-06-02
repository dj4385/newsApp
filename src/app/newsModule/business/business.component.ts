import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  newsObject: any = {}

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getBusinessNews()
  }

  getBusinessNews(){
    this.apiService.getTopHeadlines('business').subscribe(
      res=>{
        if(res){
          this.newsObject = res
        }
      }
    )
  }

}
