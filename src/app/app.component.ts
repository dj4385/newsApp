import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newsApp';
  newsCategory = [
    // {
    //   id: 1,
    //   navText: 'COVID-19',
    //   icon: 'security',
    //   link1: 'news/covid19'
    // },
    {
      id: 2,
      navText: 'Trending News',
      icon: 'trending_up',
      link1: 'news/topHeadlines'
    },
    {
      id: 3,
      navText: 'Your Country',
      icon: 'language',
      link1: 'news/country'
    },
    {
      id: 4,
      navText: 'MyLocation',
      icon: 'location_on',
      link1: 'news/myLocation'
    },
    {
      id: 5,
      navText: 'Technology',
      icon: 'memory',
      link1: 'news/technology'
    },
    {
      id: 6,
      navText: 'Business',
      icon: 'business',
      link1: 'news/business'
    },
    {
      id: 7,
      navText: 'Entertainment',
      icon: 'movie',
      link1: 'news/entertainment'
    },
    {
      id: 8,
      navText: 'Sports',
      icon: 'sports_baseball',
      link1: 'news/sports'
    }
  ]

  ngOnInit(){
    // this.getLocation()
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          console.log(longitude, latitude)
        });
    } else {
       console.log("No support for geolocation")
    }
  }

}
