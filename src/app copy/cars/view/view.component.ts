import { Component, Input } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  constructor(
    private readonly carService: CarService,
    private readonly route: ActivatedRoute
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  car: Car | null = this.carService.getCarById(Number(this.id));
}
