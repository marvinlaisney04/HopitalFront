import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.scss']
})
export class FichePatientComponent implements OnInit {

  id!: number;
  patient!: Patient;

  constructor(private patientservice: PatientService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.patient = new Patient();
    this.patientservice.get(this.id).subscribe( data => {

    console.log("test", data);
      this.patient = new Patient;
      this.patient.nom = data.nom;
      this.patient.prenom = data.prenom;
      this.patient.adresse = data.adresse;
      this.patient.telephone = data.telephone;
      this.patient.sexe = data.sexe;
      this.patient.age = data.age;
      this.patient.dateNaissance = data.dateNaissance;
      this.patient.numSecu = data.numSecu;
    });
    console.log(this.patient);
  }

}
