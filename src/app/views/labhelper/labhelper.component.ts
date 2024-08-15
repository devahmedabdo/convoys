import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-labhelper',
  templateUrl: './labhelper.component.html',
  styleUrls: ['./labhelper.component.scss'],
})
export class LabhelperComponent implements OnInit {
  patients: any[] = [];
  get() {
    // get from local storage
    return JSON.parse(localStorage.getItem('patients')!) || [];
  }
  constructor() {}
  ngOnInit(): void {
    this.patients = this.get();
  }
  copy(text: any) {
    navigator.clipboard.writeText(text);
    let add = new Audio('../../../assets/add.mp3');
    add.play();
  }
  deleteIcon = faTrashCan;
  x_icon = faX;
  searchCode: any = '';
  searchName: any = '';
  addIcon = faPlus;
  tests: any[] = JSON.parse(localStorage.getItem('priceList') || '[]');

  print() {
    window.print();
  }
}
