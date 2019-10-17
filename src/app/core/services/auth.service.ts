import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../shared/models/user";
import { HttpClient, HttpParams } from "@angular/common/http";
import { TokenService } from "./token.service";
import { AuthResponse } from '../../shared/models/auth-response';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private token: TokenService) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post<AuthResponse>(`/auth/login`, {username, password})
      .pipe(
        map((res: AuthResponse) => {
          this.token.set(res.token);
          return res.token;
        })
      );
  }

  signUpUser(user: User): Observable<string> {
    return this.http
      .post<AuthResponse>(`/auth/register`, {...user, confirm_password: user.password})
      .pipe(
        map((res: AuthResponse) => {
          this.token.set(res.token);
          return res.token;
        })
      );
  }

  checkEmailNotTaken(email: string): Observable<boolean> {
    const params = new HttpParams().set('email', email);
    return this.http.get<boolean>(`/auth/check-user`, { params });
  }
}
