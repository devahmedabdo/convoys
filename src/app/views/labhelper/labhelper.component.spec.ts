import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabhelperComponent } from './labhelper.component';

describe('LabhelperComponent', () => {
  let component: LabhelperComponent;
  let fixture: ComponentFixture<LabhelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabhelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabhelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
