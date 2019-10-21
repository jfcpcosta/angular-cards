import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { AuthService } from '../../../core/services/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: "ac-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: null,
    username: null,
    email: ["", [], this.validateEmailNotTaken.bind(this)],
    password: null,
    confirmPassword: null
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  validateEmailNotTaken(control: AbstractControl) {
    return this.auth.checkEmailNotTaken(control.value).pipe(
      map(res => res ? {emailTaken: true} : null)
    );
  }

  registerSubmitHandler(): void {
    console.log(this.form.value);

    if (this.form.valid) {
      this.auth.signUpUser(this.form.value).subscribe(
        res => this.router.navigate(['/'])
      );
    }
  }
}
