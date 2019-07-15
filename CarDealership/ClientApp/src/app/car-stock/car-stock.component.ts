import { Component, OnInit } from '@angular/core';
import { Car } from 'models/car';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-car-stock',
  templateUrl: './car-stock.component.html',
  styleUrls: ['./car-stock.component.css']
})

export class CarStockComponent implements OnInit {
  
  public carList: Car[] = [];
  constructor(private api: ApiService) { }
  
  async ngOnInit() {
    this.carList = await this.api.getCarList();
  }

  async searchCars(carParams: object){
    this.carList = await this.api.getCarListByParams(carParams);
  }
}
