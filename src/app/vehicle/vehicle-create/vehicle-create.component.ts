import {Vehicle} from '../Vehicle';
import {VehicleService} from '../vehicle.service';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {IMyOptions, IMyDateModel} from 'angular4-datepicker/src/my-date-picker/interfaces';


@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css'],
})
export class VehicleCreateComponent implements OnInit {

  @Input() public veh: Vehicle = new Vehicle(null, null, null, 'black' , '2000-01-01' , null);

  private destUrl: string[];

  public colours = ['black', 'blue', 'green', 'red', 'silver', 'yellow', 'white'];

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private location: Location) {}

  public myDatePickerOptions: IMyOptions = {
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    showClearDateBtn: false,
  };

  onDateChanged(event: IMyDateModel) {
        this.veh.dateOfFirstRegistration = event.formatted;
    }

  ngOnInit() {
    this.getVehicle();
  }

  getVehicle() {
    this.destUrl = window.location.href.split('/');
    if (this.destUrl[this.destUrl.length - 1] !== 'vehicle-create') {
      const id = +this.route.snapshot.paramMap.get('id');
      this.vehicleService.getVehicle(id).subscribe(vehicle => this.veh = vehicle);
    }
  }

  save() {
    if (this.destUrl[this.destUrl.length - 1] !== 'vehicle-create') {
      this.vehicleService.updateVehicle(this.veh).subscribe(() => this.goBack());
    } else {
      this.vehicleService.addVehicle(this.veh).subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }

}
