import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  Subscription: Subscription = new Subscription();
  showSpinner: boolean = true;
  bookData!: any;

  id: any;
  isInWishlist: boolean = false;

  constructor(
    private routeActivate: ActivatedRoute,
    private userService: UsersService,
  ) {

  }

  ngOnInit(): void {
    this.routeActivate.params.subscribe(({ id }) => {
      this.id = id;
      console.log(this.id,'dddddddddddddd')
      this.getBookData(id);
      console.log(this.bookData,'dddd')


    });

    this.isInWishlist = this.checkIfInWishlist(this.bookData.id);

  }

  toggleWishlist() {
    if (this.isInWishlist) {
      this.removeFromWishlist(this.bookData.id);
    } else {
      this.addToWishlist(this.bookData.id);
    }
    this.isInWishlist = !this.isInWishlist; // Toggle the button state
  }

  // Check if the book ID is in localStorage
  checkIfInWishlist(bookId: string): boolean {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    return wishlist.includes(bookId);
  }

  // Add book ID to the wishlist in localStorage
  addToWishlist(bookId: string) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist.push(bookId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  // Remove book ID from the wishlist in localStorage
  removeFromWishlist(bookId: string) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter((id: string) => id !== bookId); // Remove the book ID
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
  getBookData(id: any) {
    if(id == 1){
      this.bookData =  {
        id: 1, // Replace with the actual ID of the book you want to show details for
        volumeInfo: {
          title: 'The Intelligent Investor',
          publishedDate: '2003-06-01',
          authors: ['Benjamin Graham'],
          noPage: 300,
          thumbnail: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg',
          ediCout: 4, 
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
this.bookData ={
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



    else if (id == 3){
      this.bookData ={
        id: 3,
        volumeInfo: {
          title: 'The Intelligent Investor',
          publishedDate: '2003-06-01',
          authors: [{ id: 1, name: 'Benjamin Graham' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg',
          noPage: 500,
          ediCout: 2,
          reviews: [
            {
              reviewer: 'Sam2 Johnson',
              comment: 'A great read for aspiring entrepreneurs.',
              rating: 4,
            },
          ],
        },
      }

      
          }

          else if (id == 4){
            this.bookData ={
              id: 4,
              volumeInfo: {
                title: 'Thinking, Fast and Slow',
                publishedDate: '2011-10-25',
                authors: [{ id: 4, name: 'Daniel Kahneman' }],
                thumbnail: 'https://media.istockphoto.com/id/1391465584/photo/copy-space-shot-of-smiling-redhead-reading-an-interesting-book-while-relaxing.jpg?s=2048x2048&w=is&k=20&c=9dBmOx12HeASfguNRp8gnEJ8Z6xs_BN_HU0pwx_fPpU=',
                noPage: 500,
                ediCout: 2,
                reviews: [
                  {
                    reviewer: 'Sam2 Johnson',
                    comment: 'A great read for aspiring entrepreneurs.',
                    rating: 4,
                  },
                ],
              },
            }
    // this.Subscription.add(
    //   this.bookService.getUBookProfile(id).subscribe((res: any) => {
    //     this.showSpinner = false;
    //     this.bookData = res.result;
      
    //   })
    // );
  }

  else if (id == 5){
    this.bookData ={
      id: 5,
      volumeInfo: {
        title: 'The Millionaire Next Door',
          publishedDate: '1996-10-01',
          authors: [{ id: 5, name: 'Thomas J. Stanley' }, { id: 6, name: 'William D. Danko' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg',
        noPage: 500,
        ediCout: 2,
        reviews: [
          {
            reviewer: 'Sam2 Johnson',
            comment: 'A great read for aspiring entrepreneurs.',
            rating: 4,
          },
        ],
      },
    }
// this.Subscription.add(
//   this.bookService.getUBookProfile(id).subscribe((res: any) => {
//     this.showSpinner = false;
//     this.bookData = res.result;

//   })
// );
}



else if (id == 6){
  this.bookData ={
    id: 6,
    volumeInfo: {
    
      title: 'The Little Book of Common Sense Investing',
      publishedDate: '2007-03-01',
      authors: [{ id: 7, name: 'John C. Bogle' }],
      thumbnail: 'https://cdn.pixabay.com/photo/2017/02/26/21/39/rose-2101475_1280.jpg',
      noPage: 500,
      ediCout: 2,
      reviews: [
        {
          reviewer: 'Sam2 Johnson',
          comment: 'A great read for aspiring entrepreneurs.',
          rating: 4,
        },
      ],
    },
  }
// this.Subscription.add(
//   this.bookService.getUBookProfile(id).subscribe((res: any) => {
//     this.showSpinner = false;
//     this.bookData = res.result;

//   })
// );
}


else if (id == 7){
  this.bookData ={
    id: 7,
    volumeInfo: {
    
      title: 'The Wealth of Nations',
      publishedDate: '1776-03-09',
      authors: [{ id: 8, name: 'Adam Smith' }],
      thumbnail: null,
      noPage: 500,
      ediCout: 2,
      reviews: [
        {
          reviewer: 'Sam2 Johnson',
          comment: 'A great read for aspiring entrepreneurs.',
          rating: 4,
        },
      ],
    },
  }
// this.Subscription.add(
//   this.bookService.getUBookProfile(id).subscribe((res: any) => {
//     this.showSpinner = false;
//     this.bookData = res.result;

//   })
// );
}


else if (id == 8){
  this.bookData ={
    id: 7,
    volumeInfo: {
    
      title: 'Money: Master the Game',
      publishedDate: '2014-11-18',
      authors: [{ id: 9, name: 'Tony Robbins' }],
      thumbnail: 'https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_1280.jpg',
      noPage: 500,
      ediCout: 2,
      reviews: [
        {
          reviewer: 'Sam2 Johnson',
          comment: 'A great read for aspiring entrepreneurs.',
          rating: 4,
        },
      ],
    },
  }
// this.Subscription.add(
//   this.bookService.getUBookProfile(id).subscribe((res: any) => {
//     this.showSpinner = false;
//     this.bookData = res.result;

//   })
// );
}


else if (id == 8){
  this.bookData ={
    id: 7,
    volumeInfo: {
    
      title: 'The Four Pillars of Investing',
      publishedDate: '2002-07-01',
      authors: [{ id: 10, name: 'William J. Bernstein' }],
      thumbnail: null,
      noPage: 500,
      ediCout: 2,
      reviews: [
        {
          reviewer: 'Sam2 Johnson',
          comment: 'A great read for aspiring entrepreneurs.',
          rating: 4,
        },
      ],
    },
  }
// this.Subscription.add(
//   this.bookService.getUBookProfile(id).subscribe((res: any) => {
//     this.showSpinner = false;
//     this.bookData = res.result;

//   })
// );
}


}





}
