import { Component, OnInit } from '@angular/core';
import { fade, uReveal } from 'src/app/animations/animation';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  animations: [fade, uReveal],
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
  modal: any = {
    type: null,
    data: {
      name: null,
      description: {
        ar: null,
        en: null,
      },
      price: null,
      best_choice: false,
      newable: false,
      status: null,
    },
  };
  resetModal() {
    this.modal = {
      data: {
        name: null,
        description: {
          ar: null,
          en: null,
        },
        price: null,
        best_choice: false,
        newable: false,
        status: null,
      },
      type: null,
    };
  }
  openEditModal(budget: any) {
    this.modal.type = 'editBudget';
    this.modal.data = JSON.parse(JSON.stringify(budget));
    budget.action = null;
  }
}
