import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleTableComponent } from './vehicle/vehicle-table/vehicle-table.component';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicle-table', pathMatch: 'full' },
  { path: 'vehicle-table', component: VehicleTableComponent },
  { path: 'vehicle-create', component: VehicleCreateComponent },
  { path: 'vehicle-edit/:id', component: VehicleCreateComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

