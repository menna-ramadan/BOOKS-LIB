import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input()
  inputSideNav!: MatSidenav;
  canShow = false;

  constructor(private router: Router,) {

  }

  ngOnInit(): void {}

 showSearch() {
    this.router.navigate([
      `/dashboard/users-list`,
      {
        title: 'showSearch',
      },
    ]);
  }
}
