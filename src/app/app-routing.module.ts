import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractsComponent } from './contracts/contracts.component';
import { StationsComponent } from './stations/stations.component';


const routes: Routes = [
  {path : 'contracts', component : ContractsComponent},
  {path: 'stations/:contract', component:StationsComponent},
  {path : '', component : ContractsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
