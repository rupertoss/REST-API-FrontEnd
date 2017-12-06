import {Injectable} from '@angular/core';
import {Vehicle} from './vehicle';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VehicleService {

  private apiUrl = 'http://localhost:8080/api/vehicles';

  constructor(private http: Http) {}

  getAll(): Observable<Vehicle[]> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.patch(this.apiUrl + '/' + vehicle.id, vehicle)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post(this.apiUrl, vehicle)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteVehicle(id: number): Observable<Vehicle> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
