import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  constructor() {}
  patients: any[] = [];
  get() {
    // get from local storage
    return JSON.parse(localStorage.getItem('patients')!) || [];
  }
  save(data: any) {
    // svae to local storage
    localStorage.setItem('patients', JSON.stringify(data));
  }
  date: any;
  ngOnInit(): void {
    this.patients = this.get();
  }
  chosenDate: any;

  changeDate(date: Date) {
    this.chosenDate = date;
    this.date = new Date(date).toDateString();
  }
}
