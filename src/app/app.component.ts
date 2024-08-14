import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    window.addEventListener('scroll', () => {
      this.headerStatus = false;
    });
  }
  headerStatus: boolean = false;
  changeRoute() {
    this.headerStatus = false;
    window.scrollTo(0, 0);
  }
  ngOnInit() {}
}
