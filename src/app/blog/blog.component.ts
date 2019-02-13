
import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
post;
  constructor(private service: BlogService) { }

  ngOnInit() {
    this.service.dohvatiPostove().subscribe(
      response=> {
        console.log(response);
        this.post = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
