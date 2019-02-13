
import {NavigacijaService} from '../navigacija.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navigacija;
  constructor(private service: NavigacijaService) { }

  ngOnInit() {
    this.service.dohvatiNavigaciju().subscribe(
      response=>{
        console.log(response);
        this.navigacija = response;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
