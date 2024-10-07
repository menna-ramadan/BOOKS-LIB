import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishlistComponent implements OnInit {
  // books: Book[] = [];
  // Subscription: Subscription = new Subscription();
  addWishlist:boolean = false
  searchKey: string = '';
  books:any
  page: number = 1; // Current page
  pageSize: number = 9; // Items per page
  totalCount: number = 0; // Total number of items
  wishlist: number[] = [];
  wishlistBooks: any[] = [];
  constructor(  private routeActivate: ActivatedRoute,) {}

  ngOnInit(): void {
   this.books = [
      {
        id: 1,
        volumeInfo: {
          title: 'The Intelligent Investor',
          publishedDate: '2003-06-01',
          authors: [{ id: 1, name: 'Benjamin Graham' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg',
        }
      },
      {
        id: 2,
        volumeInfo: {
          title: 'Principles: Life and Work',
          publishedDate: '2017-09-19',
          authors: [{ id: 2, name: 'Ray Dalio' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_1280.jpg',
        }
      },
      {
        id: 3,
        volumeInfo: {
          title: 'Rich Dad Poor Dad',
          publishedDate: '2000-04-01',
          authors: [{ id: 3, name: 'Robert T. Kiyosaki' }],
          thumbnail: 'https://media.istockphoto.com/id/1304542192/photo/white-woman-reading-a-book-in-an-armchair-relaxing-in-nice-daylight-outside-copy-space.jpg?s=2048x2048&w=is&k=20&c=hDI1D8AQemcDy2yBJ8jC08o2e3VEWGUdExcxvlp-Oyo=',
        }
      },
      {
        id: 4,
        volumeInfo: {
          title: 'Thinking, Fast and Slow',
          publishedDate: '2011-10-25',
          authors: [{ id: 4, name: 'Daniel Kahneman' }],
          thumbnail: 'https://media.istockphoto.com/id/1391465584/photo/copy-space-shot-of-smiling-redhead-reading-an-interesting-book-while-relaxing.jpg?s=2048x2048&w=is&k=20&c=9dBmOx12HeASfguNRp8gnEJ8Z6xs_BN_HU0pwx_fPpU=',
        }
      },
      {
        id: 5,
        volumeInfo: {
          title: 'The Millionaire Next Door',
          publishedDate: '1996-10-01',
          authors: [{ id: 5, name: 'Thomas J. Stanley' }, { id: 6, name: 'William D. Danko' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg',
        }
      },
      {
        id: 6,
        volumeInfo: {
          title: 'The Little Book of Common Sense Investing',
          publishedDate: '2007-03-01',
          authors: [{ id: 7, name: 'John C. Bogle' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2017/02/26/21/39/rose-2101475_1280.jpg',
        }
      },
      {
        id: 7,
        volumeInfo: {
          title: 'The Wealth of Nations',
          publishedDate: '1776-03-09',
          authors: [{ id: 8, name: 'Adam Smith' }],
          thumbnail: null,
        }
      },
      {
        id: 8,
        volumeInfo: {
          title: 'Money: Master the Game',
          publishedDate: '2014-11-18',
          authors: [{ id: 9, name: 'Tony Robbins' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_1280.jpg',
        }
      },
      {
        id: 9,
        volumeInfo: {
          title: 'The Four Pillars of Investing',
          publishedDate: '2002-07-01',
          authors: [{ id: 10, name: 'William J. Bernstein' }],
          thumbnail: null,
        }
      },
      {
        id: 10,
        volumeInfo: {
          title: 'A Random Walk Down Wall Street',
          publishedDate: '2011-12-01',
          authors: [{ id: 11, name: 'Burton G. Malkiel' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2019/01/30/08/30/book-3964050_1280.jpg',
        }
      },
      {
        id: 11,
        volumeInfo: {
          title: 'Fooled by Randomness',
          publishedDate: '2001-10-01',
          authors: [{ id: 12, name: 'Nassim Nicholas Taleb' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327_960_720.jpg',
        }
      },
      {
        id: 12,
        volumeInfo: {
          title: 'Your Money or Your Life',
          publishedDate: '1992-05-01',
          authors: [{ id: 13, name: 'Vicki Robin' }, { id: 14, name: 'Joe Dominguez' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2021/12/12/09/41/woman-6864640_1280.jpg',
        }
      },
      {
        id: 13,
        volumeInfo: {
          title: 'The Richest Man in Babylon',
          publishedDate: '1926-01-01',
          authors: [{ id: 15, name: 'George S. Clason' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747_1280.jpg',
        }
      },
      {
        id: 14,
        volumeInfo: {
          title: 'The Barefoot Investor',
          publishedDate: '2016-10-24',
          authors: [{ id: 16, name: 'Scott Pape' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2021/04/10/21/45/music-book-6168179_1280.jpg',
        }
      },
      {
        id: 15,
        volumeInfo: {
          title: 'Unshakeable',
          publishedDate: '2017-02-28',
          authors: [{ id: 9, name: 'Tony Robbins' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2015/09/05/07/28/writing-923882_960_720.jpg',
        }
      },
      {
        id: 16,
        volumeInfo: {
          title: 'The Psychology of Money',
          publishedDate: '2020-09-08',
          authors: [{ id: 17, name: 'Morgan Housel' }],
          thumbnail: null,
        }
      },
      {
        id: 17,
        volumeInfo: {
          title: 'I Will Teach You to Be Rich',
          publishedDate: '2009-03-23',
          authors: [{ id: 18, name: 'Ramit Sethi' }],
          thumbnail: 'https://cdn.pixabay.com/photo/2014/06/28/12/35/books-378903_1280.jpg',
        }
      },
      {
        id: 18,
        volumeInfo: {
          title: 'The Bogleheads\' Guide to Retirement Planning',
          publishedDate: '2009-11-30',
          authors: [{ id: 19, name: 'Taylor Larimore' }, { id: 20, name: 'Mel Lindauer' }],
          thumbnail: null,
        }
      },
      {
        id: 19,
        volumeInfo: {
          title: 'Broke Millennial',
          publishedDate: '2017-05-02',
          authors: [{ id: 21, name: 'Erin Lowry' }],
          thumbnail: null,
        }
      },
      {
        id: 20,
        volumeInfo: {
          title: 'The Total Money Makeover',
          publishedDate: '2003-09-09',
          authors: [{ id: 22, name: 'Dave Ramsey' }],
          thumbnail: null,
        }
      },
      {
        id: 21,
        volumeInfo: {
          title: 'The Simple Path to Wealth',
          publishedDate: '2016-06-01',
          authors: [{ id: 23, name: 'JL Collins' }],
          thumbnail: null,
        }
      },
      {
        id: 22,
        volumeInfo: {
          title: 'Early Retirement Extreme',
          publishedDate: '2010-11-01',
          authors: [{ id: 24, name: 'Jacob Lund Fisker' }],
          thumbnail: null,
        }
      },
      {
        id: 23,
        volumeInfo: {
          title: 'Financial Freedom',
          publishedDate: '2019-02-05',
          authors: [{ id: 25, name: 'Grant Sabatier' }],
          thumbnail: null,
        }
      },
      {
        id: 24,
        volumeInfo: {
          title: 'The Little Book That Still Beats the Market',
          publishedDate: '2010-11-01',
          authors: [{ id: 26, name: 'Joel Greenblatt' }],
          thumbnail: null,
        }
      },
      {
        id: 25,
        volumeInfo: {
          title: 'The Only Investment Guide You\'ll Ever Need',
          publishedDate: '1978-01-01',
          authors: [{ id: 27, name: 'Andrew Tobias' }],
          thumbnail: null,
        }
      }
    ];
    const wishlistIds = this.getWishlistBooks(); // Fetch wishlist IDs from local storage
    this.wishlistBooks = this.books.filter((book: { id: number; }) => wishlistIds.includes(book.id));
  }
  getWishlistBooks(): number[] {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  }
}
