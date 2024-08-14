import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  faFileExcel,
  faFilePdf,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { fade, uReveal } from 'src/app/animations/animation';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  animations: [fade, uReveal],
})
export class PatientsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  patients: any[] = [];
  get() {
    // get from local storage
    return JSON.parse(localStorage.getItem('patients')!) || [];
  }
  save(data: any) {
    // svae to local storage
    localStorage.setItem('patients', JSON.stringify(data));
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.patients = this.get();
  }

  edit() {
    let patients = this.get();
    patients[this.modal.index] = this.modal.data;
    this.save(patients);
    this.resetModal();
    this.getData();
  }
  modal: any = {
    type: null,
    data: {
      name: null,
      pay: null,
      disscount: null,
      tests: [],
      total: 0,
    },
  };
  delete() {
    this.patients.splice(this.modal.index, 1);
    this.save(this.patients);
    this.resetModal();
    this.getData();
  }
  resetModal() {
    this.modal = {
      data: {
        name: null,
        age: null,
        doctorName: null,
        pay: null,
        disscount: null,
        tests: [],
        date: null,
        total: null,
      },
      index: null,
      type: null,
    };
  }
  remove(index: any) {
    this.modal.data.tests.splice(index, 1);
    this.calc();
    let remove = new Audio('assets/delete.mp3');
    remove.play();
  }
  calc() {
    let total = 0;
    this.modal.data.tests.forEach((ele: any) => {
      total += +ele.price;
    });
    this.modal.data.total = total;
  }
  add(test: any) {
    this.modal.data.tests.push(test);
    this.calc();
    let add = new Audio('assets/add.mp3');
    add.play();
    this.searchCode = '';
    this.searchName = '';
  }
  openEditModal(index: any, patient: any) {
    this.modal.data = JSON.parse(JSON.stringify(patient));
    this.modal.data.done = Boolean(this.modal.data.done);
    this.modal.index = index;
    this.modal.type = 'edit';
  }
  deleteIcon = faTrashCan;
  x_icon = faX;
  searchCode: any = '';
  searchName: any = '';
  addIcon = faPlus;
  tests: any[] = JSON.parse(localStorage.getItem('priceList') || '[]');
  addWithEnter(btn: any, value: any, type: any) {
    if (btn.keyCode == 13) {
      let ele = this.tests.find((e) => {
        if (type == 'code') {
          return e.code == value;
        }
        return e.name.toLocaleLowerCase().includes(value);
      });

      if (ele && !this.isDublicate(ele, this.modal.data.tests)) {
        this.add(ele);
        this.calc();
      }
    }
  }
  isDublicate(ele: any, arr: any[]) {
    let isExist = arr.filter((arrEle) => {
      return arrEle.code == ele.code;
    });
    if (isExist.length) {
      return true;
    }
    return false;
  }

  generateExcel() {
    let data: any[] = [];
    let patients = JSON.parse(JSON.stringify(this.patients));
    patients.forEach((ele: any) => {
      let allTests: any[] = [];
      ele.tests.forEach((test: any) => {
        allTests.push(test.name);
      });
      let testasstring = allTests.join(' + ');
      ele['patientTest'] = testasstring;
      delete ele.tests;
      data.push(ele);
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'data');
  }

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
  print() {
    window.print();
  }
  excel = faFileExcel;
  pdf = faFilePdf;

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    const url: string = window.URL.createObjectURL(data);
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
