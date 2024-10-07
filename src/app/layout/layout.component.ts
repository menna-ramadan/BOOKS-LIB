import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  userFirstName: any;
  userLastName: any;
  userRole: any;
  userImg: any;
  baseUrl: string = environment.baseUrl;
  constructor(    private router: Router,) {
    this.userFirstName = localStorage.getItem('firstName');
    this.userLastName = localStorage.getItem('lastName');
    this.userRole = localStorage.getItem('role');
    this.userImg = localStorage.getItem('image');
    }

  ngOnInit(): void {}

  goToAssignUser(){
    this.router.navigate(['/dashboard/assign-to-role']);

  }

  goToLogin(){
    localStorage.clear();
    this.router.navigate(['/dashboard/login']);

  }
}
