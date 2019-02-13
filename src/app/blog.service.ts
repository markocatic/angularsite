import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
@Injectable()
export class BlogService {
   putanja = "http://localhost:4200/assets/json";

   constructor(private service: HttpClient) { }

   dohvatiPostove() {
     var navigacija = this.service.get(this.putanja + "/blog.json");
     return navigacija;
   }


}
