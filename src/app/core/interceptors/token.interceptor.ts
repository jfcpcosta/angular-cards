import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private token: TokenService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({
            url: environment.baseUrl + req.url
        });

        if (this.token.has()) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token.get()}`,
                    Accept: 'application/json'
                }
            });
        }

        return next.handle(req);
    }
}