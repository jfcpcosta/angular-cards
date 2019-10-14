import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  private tokenKey = "token";

  constructor() {}

  set(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  get(): string {
    return sessionStorage.getItem(this.tokenKey);
  }

  has(): boolean {
    return !!this.get();
  }

  remove(): void {
    sessionStorage.removeItem(this.tokenKey);
  }
}
