import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: "ac-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  loginSubmitHandler() {
    
    if (this.form.valid) {
      console.log(this.form.value);
      this.auth.login(this.form.value.email, this.form.value.password).subscribe(
        res => console.log(res)
      );
    }

    return false;
  }
}
