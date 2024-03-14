import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../models/car';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private readonly carService: CarService) {}
  cars: Car[] = this.carService.cars;
}
