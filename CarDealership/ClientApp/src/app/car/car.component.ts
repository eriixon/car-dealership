import { Component, Input } from '@angular/core';
import { Car } from 'models/car';
import { AppConstants } from 'constants/app.constants';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  public CAR_IMG = AppConstants.CAR_IMG;

  @Input() car : Car;
  constructor() { }
}
