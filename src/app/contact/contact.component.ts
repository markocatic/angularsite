import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // rForm: FormGroup;
  // por: any;
  // namee: string = "";
  // emaile: string = "";
  // subjecte: string = "";
  // messagee: string = "";

  // constructor(private fb:FormBuilder) {
  //   this.rForm = fb.group({
  //     'namee': [null, Validators.required],
  //     'emaile': [null, Validators.required],
  //     'subjecte': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
  //     'messagee': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])]
  //   })
  //  }









  
  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('',Validators.required),
  //   subject: new FormControl('',Validators.required),
  //   message: new FormControl('',Validators.required)
  // });

  // get name() {
  //   return this.form.get("name");
  // }
  // get email() {
  //   return this.form.get("email");
  // }
  // get subject() {
  //   return this.form.get("subject");
  // }
  // get message() {
  //   return this.form.get("mesage");
  // }

  constructor() { }

  ngOnInit() {
  }

}
