import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppConstants } from 'constants/app.constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  COLORS = AppConstants.COLORS;
  @Output() result = new EventEmitter<object>();

  carForm = new FormGroup({
    color: new FormControl(''),
    hasSunroof: new FormControl(false),
    isFourWheelDrive: new FormControl(false),
    hasLowMiles: new FormControl(false),
    hasPowerWindows: new FormControl(false),
    hasNavigation: new FormControl(false),
    hasHeatedSeats: new FormControl(false),
  });

  onLookup() {
    this.result.emit(this.carForm.value);
  }
}
