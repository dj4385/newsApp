import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-mylocation',
  templateUrl: './mylocation.component.html',
  styleUrls: ['./mylocation.component.css']
})
export class MylocationComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
    },1000)
  }

}
