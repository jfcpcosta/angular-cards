import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  form = this.fb.group({
    image: null
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
