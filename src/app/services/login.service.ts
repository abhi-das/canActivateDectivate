import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class LoginService {

    isLoggedIn = false;
    redirectUrl: string;

    isLogin():  boolean {
        // return of(true).pipe(
        //     delay(1000),
        //     tap(val => this.isLoggedIn = true)
        // );
        this.isLoggedIn = false;
        return this.isLoggedIn;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}