import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent implements OnInit {

  formPatient!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formPatient = this.fb.group({
      firstName: '',
      lastName: '',
      telephone: '',
      numSecu: '',
      adresse: '',
      codePostal: '',
      ville: '',
      sexe: [''],
      dateNaissance: ''
    })
  }

}
