import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { CARS } from '../data/cars';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public cars: Car[] = CARS;
  public getCarById(id: number | null): Car | null {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      return null;
    }
    return car;
  }
  public AddCar(c: Car) {
    c.id = this.cars.length + 1;
    this.cars.push(c);
    console.log(c);
    console.log(this.cars);
  }
}
