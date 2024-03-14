import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Car } from '../models/car';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  carForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly carService: CarService
  ) {
    this.carForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCar() {
    if (this.carForm.valid) {
      const newCar: Car = {
        id: 0,
        make: this.carForm.value.make,
        model: this.carForm.value.model,
        description: this.carForm.value.description,
      };
      this.carService.AddCar(newCar);
      this.carForm.reset();
    }
  }
}
