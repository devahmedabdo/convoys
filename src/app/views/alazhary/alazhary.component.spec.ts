import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlazharyComponent } from './alazhary.component';

describe('AlazharyComponent', () => {
  let component: AlazharyComponent;
  let fixture: ComponentFixture<AlazharyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlazharyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlazharyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
