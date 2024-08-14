import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmerica, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
})
export class SystemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  tests: any[] = JSON.parse(localStorage.getItem('priceList') || '[]');
  request: any[] = [];
  remove(index: any) {
    this.request.splice(index, 1);
    this.calc();
    let remove = new Audio('../../../assets/delete.mp3');
    remove.play();
  }
  total: number = 0;
  calc() {
    let total = 0;
    this.request.forEach((ele) => {
      total += +ele.price;
    });
    this.total = total;
  }

  add(test: any) {
    this.request.push(test);
    this.calc();
    let add = new Audio('../../../assets/add.mp3');
    add.play();
    this.searchCode = '';
    this.searchName = '';
  }
  addWithEnter(btn: any, value: any, type: any) {
    if (btn.keyCode == 13) {
      let ele = this.tests.find((e) => {
        if (type == 'code') {
          return e.code == value;
        }
        return e.name.toLocaleLowerCase().includes(value);
      });

      if (ele && !this.isDublicate(ele, this.request)) {
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
  deleteIcon = faTrashCan;
  addIcon = faPlus;
  searchCode: any = '';
  searchName: any = '';

  get() {
    // get from local storage
    return JSON.parse(localStorage.getItem('patients')!) || [];
  }
  save(data: any) {
    // svae to local storage
    localStorage.setItem('patients', JSON.stringify(data));
  }
  savePatient(data: NgForm) {
    // add new patient to local storage
    this.calc();
    let patients: any = this.get();
    let newPatient: any = data.value;
    newPatient.code = +(localStorage.getItem('code') || 1);
    newPatient['tests'] = this.request;
    // newPatient['date'] = new Date().toDateString();
    newPatient['date'] = new Date().toDateString();
    newPatient['total'] = this.total;
    console.log(patients);
    patients.unshift(newPatient);
    this.save(patients);
    localStorage.setItem('code', (++newPatient.code).toString());
    data.reset();
    this.request = [];
    this.total = 0;
  }
}
