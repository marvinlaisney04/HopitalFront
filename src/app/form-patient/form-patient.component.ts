import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent implements OnInit {

  @Input() idPatient!: number;
  @Input() patient!: Patient;
  formPatient!: FormGroup;
  title: string = "Créer un nouveau <span>patient</span>";
  imgUrl: string = "../../assets/images/nouveau_patient.svg";
  imgAlt: string = "Nouveau Patient";

  constructor(private fb: FormBuilder, private patientservice: PatientService) { }

  ngOnInit(): void {
    this.formPatient = this.fb.group({
      firstName: '',
      lastName: '',
      telephone: '',
      dateNaissance: '',
      sexe: [''],
      adresse: '',
      codePostal: '',
      ville: '',
      numSecu: ''
    })
  }

  // wait for a specific cicle life func to fill form
  ngAfterViewChecked(): void {
    /**
     * TODO
     * Revoir comment remplir le formulaire, form actuellement non modifiable après chargement des données
     */
    if (this.patient !== undefined && Object.keys(this.patient).length) {
      let formatedDateNaissance = this.formatDate(this.patient.dateNaissance!) || '';
      this.formPatient = this.fb.group({
        firstName: this.patient.prenom || '',
        lastName: this.patient.nom || '',
        telephone: this.patient.telephone || '',
        dateNaissance: formatedDateNaissance,
        sexe: this.patient.sexe || [''],
        adresse: this.patient.adresse || '',
        codePostal: this.patient.codePostal || '',
        ville: this.patient.ville || '',
        numSecu: this.patient.numSecu || ''
      })

      this.title = `Fiche Patient <span>${this.patient.prenom} ${this.patient.nom}</span>`;
      this.imgUrl = "../../assets/images/fiche_patient.svg";
      this.imgAlt = "Fiche Patient";
    }
  }

  submitForm() {
    let newPatient = new Patient();

    newPatient.nom = this.formPatient.get("lastName")?.value;
    newPatient.prenom = this.formPatient.get("firstName")?.value;
    newPatient.telephone = this.formPatient.get("telephone")?.value;
    newPatient.dateNaissance = this.formPatient.get("dateNaissance")?.value;
    newPatient.sexe = this.formPatient.get("sexe")?.value;
    newPatient.adresse = this.formPatient.get("adresse")?.value;
    newPatient.codePostal = this.formPatient.get("codePostal")?.value;
    newPatient.ville = this.formPatient?.get("ville")?.value;

    let numSecu = this.formPatient?.get("numSecu")?.value
    numSecu = numSecu.replace(/\s/g, '');

    newPatient.numSecu = numSecu;
    newPatient.actif = true;

    if (this.idPatient !== undefined) {
      this.patientservice.update(this.idPatient, this.patient).subscribe((data: any) => {
        console.log("update", data);
      });
    } else {
      this.patientservice.create(newPatient).subscribe((data: any) => {
        console.log("create", data);
      });
    }
  }

  formatDate(date: Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
