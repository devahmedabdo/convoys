import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  color_1: any = '#164e63';
  color_2: any = '#0676a0';
  constructor() {}

  ngOnInit(): void {}
}
