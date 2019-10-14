import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "ac-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: null,
    password: null
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  loginSubmitHandler() {
    console.log(this.form.value);

    if (this.form.valid) {
      // post login
    }
  }
}
