import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  download(name: any) {
    let text = localStorage.getItem(name) || '';
    let blob = new Blob([text], { type: 'text' });
    let a = document.createElement('a');
    a.download = name;
    a.href = URL.createObjectURL(blob);
    a.dataset['downloadurl'] = ['text', a.download, a.href].join(':');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 1500);
  }
  openFile(event: any, name: string) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = () => {
      let text: any = reader.result;
      localStorage.setItem(name, text);
      alert('تم استيراد البيانات بنجاح');
    };
    reader.readAsText(input.files[0]);
  }
  ngOnInit(): void {}
}
