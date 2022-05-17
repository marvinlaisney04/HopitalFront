import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent implements OnInit {

  @Input() patient!: Patient;
  formPatient!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.patient);
    this.formPatient = this.fb.group({
      firstName: '' || this.patient.prenom,
      lastName: '' || this.patient.nom,
      telephone: '' || this.patient.telephone,
      numSecu: '' || this.patient.numSecu,
      adresse: '' || this.patient.adresse,
      codePostal: '',
      ville: '',
      sexe: [''],
      dateNaissance: '' || this.patient.dateNaissance
    })
  }

}
