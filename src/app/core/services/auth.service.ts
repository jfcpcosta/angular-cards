import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../shared/models/user";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private token: TokenService) {}

  login(username: string, password: string): Observable<string> {}

  signUpUser(user: User): Observable<string> {}

  checkEmailNotTaken(email: string): Observable<boolean> {}
}
