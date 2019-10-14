import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "ac-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
