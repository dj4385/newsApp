import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  newsObject: any = {}
  imgNotFound: string = 'https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png'

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getTechNews()
  }

  getTechNews(){
    this.apiService.getTopHeadlines('technology').subscribe(
      res=>{
        if(res){
          this.newsObject = res
        }
      }
    )

  }

}
