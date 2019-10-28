import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from '../_models/auth-user';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<AuthUser>;
    public currentUser: Observable<AuthUser>;
    private apiUrl: string = "http://localhost:8000/api";

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem('adminGragas')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): AuthUser {
        return this.currentUserSubject.value;
    }

    login(body: any) {
        return this.http.post<any>(`${this.apiUrl}/login`, body)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('adminGragas', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    console.log(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('adminGragas');
        this.currentUserSubject.next(null);
    }

    isLogged () {
        return this.getToken() !== null;
    }

    getToken() {
        return localStorage.getItem('adminGragas');
    }

    // getUserProfile() {
    //     const currentUser = JSON.parse(this.getToken());
    //     const user = currentUser.user;
    //     return user;
    // }
}