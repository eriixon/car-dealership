import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Car } from 'models/car';
import { AppConstants } from 'constants/app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class ApiService {

  public carList: Car[] = [];

  constructor(private http: HttpClient) { }

  async getCarList() {
    return await this.http.get<Car[]>(AppConstants.BASE + 'GetCars').toPromise();
  }

  async getCarListByParams(result: object){
    return await this.http.post<Car[]>(AppConstants.BASE + 'GetCarsByParams', result, httpOptions).toPromise();
  }
}
