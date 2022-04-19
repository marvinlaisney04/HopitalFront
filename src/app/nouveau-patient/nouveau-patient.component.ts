import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nouveau-patient',
  templateUrl: './nouveau-patient.component.html',
  styleUrls: ['./nouveau-patient.component.scss']
})
export class NouveauPatientComponent implements OnInit {

  formNouveauPatient!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formNouveauPatient = this.fb.group({
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
