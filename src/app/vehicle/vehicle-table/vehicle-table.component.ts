import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css'],
})
export class VehicleTableComponent implements OnInit {

  public vehicles: Vehicle[];

  constructor(
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.vehicleService.getAll().subscribe(vehicles => {
        this.vehicles = vehicles;
      },
      err => console.log(err));
  }

  deleteVehicle(vehicle: Vehicle) {
    if (vehicle) {
      this.vehicleService.deleteVehicle(vehicle.id).subscribe(
        res => {
          this.getAllVehicles();
          console.log('done');
        }
      );
    }
  }

}
