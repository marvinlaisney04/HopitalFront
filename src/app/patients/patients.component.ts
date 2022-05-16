import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ajouterPatient() {
    this.router.navigate(['/creer-patient']);
  }
}
