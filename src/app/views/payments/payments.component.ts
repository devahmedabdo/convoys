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
    lab: 0,
    team: 0,
    depit: 0,
  };

  getData() {
    this.patients = this.get('patients');
    console.log(this.patients);
    let allDept = 0;
    let totalPrice = 0;
    let teamPercentage = 0;
    let labPercentage = 0;
    this.patients.forEach((patient: any) => {
      let left = +patient.total - +patient.pay - +patient.disscount;
      totalPrice += patient.total - left - +patient.disscount;
      if (left) {
        this.deptPatients.push(patient);
        allDept += left;
      } else {
        patient.tests.forEach((test: any) => {
          teamPercentage += +test.team || 0;
          labPercentage += +test.price - (+test.team || 0);
        });
      }
      console.log(labPercentage);
      labPercentage -= +patient.disscount || 0;
    });

    this.mony = {
      total: totalPrice,
      lab: labPercentage,
      team: teamPercentage,
      depit: allDept,
    };
  }

  deleteIcon = faTrashCan;
  x_icon = faX;
  addIcon = faPlus;
}
