import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicDateComponent } from './medic-date.component';

describe('MedicDateComponent', () => {
  let component: MedicDateComponent;
  let fixture: ComponentFixture<MedicDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
