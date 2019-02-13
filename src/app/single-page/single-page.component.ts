import { SingleService } from '../single.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css'],
  animations: [
    trigger('popOverState',[
      state('show',style({
        opacity:1
      })),
      state('hide',style({
        opacity:0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class SinglePageComponent implements OnInit {
single;
show = false;
  constructor(private service: SingleService) { }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }
  toggle(){
    this.show = !this.show;
  }

  ngOnInit() {
    this.service.dohvatiSingle().subscribe(
      response=>{
        console.log(response);
        this.single = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
