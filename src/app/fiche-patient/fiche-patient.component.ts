import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.scss']
})
export class FichePatientComponent implements OnInit {

  id!: number;
  patient = new Patient();

  constructor(private patientservice: PatientService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.id = this.route.snapshot.params['id'];

    // this.patientservice.get(this.id).subscribe((data: Patient) => {
    //   this.patient = data;
    // });

    let data: Patient = await firstValueFrom(this.patientservice.get(this.id));
    this.patient = data;

  }
}
