import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(ruta) {
    return new Promise((resolve, reject) => {
      this.http.get(
        ruta,
      ).subscribe(response => {
        resolve(response);
      }, err => {
        console.log('reject get');
        console.log(err);
        reject(err.error);
      });
    });
  }

  put(ruta, dataForm) {
    return new Promise((resolve, reject) => {
      this.http.put(
        ruta,
        dataForm
      ).subscribe(response => {
        resolve(response)
      }, err => {
        console.log('reject put');
        console.log(err);
        reject(err.error);
      });
    });
  }

}
