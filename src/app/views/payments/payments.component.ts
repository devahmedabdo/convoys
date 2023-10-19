import { Component, OnInit } from '@angular/core';
import { faFilePdf, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons';
import { fade, uReveal } from 'src/app/animations/animation';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  animations: [fade, uReveal],
})
export class PaymentsComponent implements OnInit {
  constructor() {}
  pdf = faFilePdf;

  deptPatients: any[] = [];
  patients: any[] = [];
  get(position: any) {
    // get from local storage
    return JSON.parse(localStorage.getItem(position) || '[]');
  }
  save(data: any, position: any) {
    // svae to local storage
    localStorage.setItem(position, JSON.stringify(data));
  }
  print() {
    window.print();
  }
  ngOnInit(): void {
    this.getData();
  }
  expenses: any[] = [];
  mony: any = {
    total: 0,
    expenses: 0,
    exist: 0,
    depit: 0,
  };
  findMinAndMax(array: any[]) {
    if (array.length === 0) {
      return { min: undefined, max: undefined };
    }

    let min: any = new Date(array[0].date).getTime();
    let max: any = new Date(array[0].date).getTime();

    for (let i = 1; i < array.length; i++) {
      if (new Date(array[i].date).getTime() < min) {
        min = new Date(array[i].date).getTime();
      }
      if (new Date(array[i].date).getTime() > max) {
        max = new Date(array[i].date).getTime();
      }
    }

    return { min, max };
  }
  reportDate: any = {
    from: null,
    to: null,
  };
  getData() {
    this.patients = this.get('patients');
    if (this.patients.length) {
      let date = this.findMinAndMax(this.patients);
      this.reportDate.from = new Date(date.min).toDateString();
      this.reportDate.to = new Date(date.max).toDateString();
    }
    this.expenses = this.get('expenses');
    let allDept = 0;
    let totalPrice = 0;
    let totaExpenses = 0;
    this.patients.forEach((patient: any) => {
      let left = +patient.total - +patient.pay - +patient.disscount;
      totalPrice += patient.total - left - +patient.disscount;
      if (left) {
        this.deptPatients.push(patient);
        allDept += left;
      }
    });
    this.expenses.forEach((expense: any) => {
      totaExpenses += +expense.amount;
    });

    this.mony = {
      total: totalPrice,
      expenses: totaExpenses,
      exist: totalPrice - totaExpenses,
      depit: allDept,
    };
    this.deptPatients;
  }

  deleteIcon = faTrashCan;
  x_icon = faX;
  addIcon = faPlus;
}
