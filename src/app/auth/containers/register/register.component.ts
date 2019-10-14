import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "ac-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  registerSubmitHandler(): void {
    console.log(this.form.value);
  }
}
