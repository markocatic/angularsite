import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
@Injectable()
export class NavigacijaService {
   putanja = "http://localhost:4200/assets/json";

   constructor(private service: HttpClient) { }

   dohvatiNavigaciju() {
     var navigacija = this.service.get(this.putanja + "/navigacija.json");
     return navigacija;
   }


}
