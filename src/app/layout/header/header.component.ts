import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  links: any[] = [
    {
      name: 'اضافة',
      link: '/system',
    },
    {
      name: 'المرضي',
      link: '/patients',
    },
    {
      name: 'الحسابات',
      link: '/payments',
    },
    {
      name: 'المصروفات',
      link: '/expenses',
    },
    {
      name: 'قائمة الاسعار',
      link: '/priceList',
    },
  ];
  @Input() activeMenu!: boolean;
  @Output() activeMenuChange = new EventEmitter<boolean>();
  ngOnInit(): void {}
  reflectActiveMenu() {
    this.activeMenuChange.emit(!this.activeMenu);
  }
}
