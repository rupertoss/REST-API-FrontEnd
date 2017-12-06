export class Vehicle {
  id: number;
  brand: string;
  model: string;
  colour: string;
  dateOfFirstRegistration: string;
  placeOfFirstRegistration: string;

  constructor(id: number, brand: string, model: string, colour: string, dateOfFirstRegistration: string, placeOfFirstRegistration: string) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.colour = colour;
    this.dateOfFirstRegistration = dateOfFirstRegistration;
    this.placeOfFirstRegistration = placeOfFirstRegistration;
  }
}
