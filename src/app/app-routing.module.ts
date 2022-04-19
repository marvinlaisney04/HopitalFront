import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { HomeComponent } from './home/home.component';
import { NouveauPatientComponent } from './nouveau-patient/nouveau-patient.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patient/:id', component: FichePatientComponent },
  { path: 'creer-patient', component: NouveauPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
