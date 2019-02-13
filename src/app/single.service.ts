import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';

@Injectable()
export class SingleService {

  putanja = "http://localhost:4200/assets/json";

  constructor(private service: HttpClient) { }

  dohvatiSingle() {
    var navigacija = this.service.get(this.putanja + "/single.json");
    return navigacija;
  }
}
