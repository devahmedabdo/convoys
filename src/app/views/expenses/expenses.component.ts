import { Component, OnInit } from '@angular/core';
import {
  faFileExcel,
  faFilePdf,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons';
import { fade, uReveal } from 'src/app/animations/animation';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  animations: [fade, uReveal],
})
export class ExpensesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.expenses = this.get('expenses');
  }
  modal: any = {
    type: null,
    data: {
      expenses: null,
      amount: null,
      date: null,
    },
    index: null,
  };
  resetModal() {
    this.modal = {
      type: null,
      data: {
        expenses: null,
        amount: null,
        date: null,
      },
      index: null,
    };
  }
  add(data: any) {
    data.value['date'] = new Date();
    this.expenses.unshift(data.value);
    this.save(this.expenses, 'expenses');
    this.resetModal();
  }
  edit(index: any, data: any) {
    this.expenses[index] = data.value;
    this.save(this.expenses, 'expenses');
    this.resetModal();
  }
  expenses: any[] = [];
  get(position: any) {
    // get from local storage
    return JSON.parse(localStorage.getItem(position)!) || [];
  }
  save(data: any, position: any) {
    // svae to local storage
    localStorage.setItem(position, JSON.stringify(data));
  }
  deleteIcon = faTrashCan;
  x_icon = faX;
  addIcon = faPlus;

  openEditModal(index: any, patient: any) {
    console.log(index);
    this.modal.data = JSON.parse(JSON.stringify(patient));
    this.modal.index = index;
    this.modal.type = 'edit';
  }
  generateExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.expenses);
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
