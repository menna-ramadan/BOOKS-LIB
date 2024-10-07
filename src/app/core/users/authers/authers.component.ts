import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-authers',
  templateUrl: './authers.component.html',
  styleUrls: ['./authers.component.css'],
})
export class AuthersComponent implements OnInit {
  userIdShipment: any;

  currentPage: EventEmitter<number> = new EventEmitter();

  constructor(
    private routeActivate: ActivatedRoute,

  ) {}

  Subscription: Subscription = new Subscription();
  pageSize = 10;
  totalCount: number = 0;
  autherData:any
  ngOnInit(): void {
    this.routeActivate.params.subscribe(({ id }) => {
      this.userIdShipment = id;
      this.getBookData(id);
    });
  }
  getBookData(id: any) {
    if(id == 1){
      this.autherData =  {
        id: 1, // Replace with the actual ID of the book you want to show details for
        volumeInfo: {
          name: 'Benjamin Graham',
          publishedDate: '2003-06-01',
          thumbnail: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg', 
          reviews: [
            {
              reviewer: 'John Doe',
              comment: 'A must-read for every investor!',
              rating: 5
            },
            {
              reviewer: 'Jane Smith',
              comment: 'Very insightful and well-written.',
              rating: 4
            }
          ]
        }
      }
    
   }
   else if (id == 2){
this.autherData ={
  id: 2,
  volumeInfo: {
    title: 'Principles: Life and Work',
    publishedDate: '2017-09-19',
    authors: ['Ray Dalio'],
    noPage: 500,
    thumbnail: 'https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_1280.jpg',
    ediCout: 2,
    reviews: [
      {
        reviewer: 'Sam Johnson',
        comment: 'A great read for aspiring entrepreneurs.',
        rating: 4,
      },
    ],
  },
}
    }
    // this.Subscription.add(
    //   this.bookService.getUBookProfile(id).subscribe((res: any) => {
    //     this.showSpinner = false;
    //     this.bookData = res.result;
      
    //   })
    // );
  }

}
