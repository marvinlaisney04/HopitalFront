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
      firstName: this.patient.prenom,
      lastName: this.patient.nom,
      telephone: this.patient.telephone,
      dateNaissance: this.patient.dateNaissance,
      sexe: [''],
      adresse: this.patient.adresse,
      codePostal: this.patient.codePostal,
      ville: this.patient.ville,
      numSecu: this.patient.numSecu
    })
  }

}
