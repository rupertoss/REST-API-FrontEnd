import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VehicleTableComponent } from './vehicle/vehicle-table/vehicle-table.component';
import { HttpModule } from '@angular/http';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { VehicleService } from './vehicle/vehicle.service';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'angular4-datepicker/src/my-date-picker';


@NgModule({
  declarations: [
    AppComponent,
    VehicleTableComponent,
    VehicleCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
