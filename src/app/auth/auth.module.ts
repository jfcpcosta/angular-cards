import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./containers/login/login.component";
import { RegisterComponent } from "./containers/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, PasswordInputComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule]
})
export class AuthModule {}
