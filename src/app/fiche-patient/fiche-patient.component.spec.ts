import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePatientComponent } from './fiche-patient.component';

describe('FichePatientComponent', () => {
  let component: FichePatientComponent;
  let fixture: ComponentFixture<FichePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
