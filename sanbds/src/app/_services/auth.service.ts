import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<AuthUser>;
    private currentTokenSubject: BehaviorSubject<string>;
    public currentUserTokenKeyInLocalStorage = environment.currentUserToken;
    public currentUserProfileKeyInLocalStorage = environment.currentUserProfile;
    public currentUser: Observable<AuthUser>;
    public currentToken: Observable<string>
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem(this.currentUserProfileKeyInLocalStorage)));
        this.currentTokenSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem(this.currentUserTokenKeyInLocalStorage)));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentToken = this.currentTokenSubject.asObservable();
    }

    public get currentTokenValue(): string {
        return this.currentTokenSubject.value;
    }

    public get currentUserValue(): AuthUser {
        return this.currentUserSubject.value;
    }


    login(body: any) : Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, body)
            .pipe(map(res => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.setToken(res.token);
                    this.renewUserProfile();
                }

                return res;
            }))
            ;

        // return this.http.post<any>(`${this.apiUrl}/login`, body).toPromise()
        //     .then(res => {
        //         if (res && res.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             this.setToken(res.token);
        //             this.getUserProfile().toPromise().then(
        //                 user => {
        //                     this.setUserProfile(user);
        //                     console.log("User", user)
        //                 }                    
        //             )
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    register(body: any) {
        return this.http.post<any>(`${this.apiUrl}/signup`, body)
            .pipe(map(user => {
                // Register successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.set(this.currentUserTokenKeyInLocalStorage, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
            })
            )
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(this.currentUserTokenKeyInLocalStorage);
        localStorage.removeItem(this.currentUserProfileKeyInLocalStorage);
        this.currentUserSubject.next(null);
        this.currentTokenSubject.next(null);
    }

    isLogged() {
        return this.currentTokenValue !== null;
    }

    getUserProfile(): Observable<AuthUser> {
        return this.http.get<AuthUser>(`${this.apiUrl}/auth`);
    }

    roleMatch(allowedRoles): boolean {
        var isMatch = false;
        var userPemissions = this.currentUserValue.permissions;
        console.log("Token:", this.currentTokenValue);
        console.log("User:", this.currentUserValue);
        console.log("User Permissions:", userPemissions);
        allowedRoles.forEach(element => {
            if (element in userPemissions) {
                if (userPemissions[element]) {
                    isMatch = true;
                    return;
                }
            }
        })

        return isMatch;
    }

    setToken(token) {
        localStorage.setItem(this.currentUserTokenKeyInLocalStorage, JSON.stringify(token));
        this.currentTokenSubject.next(token);
    }

    setUserProfile(user: AuthUser) {
        localStorage.setItem(this.currentUserProfileKeyInLocalStorage, JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    updateUserProfile(user: AuthUser): Observable<any> {
        return this.http.patch<any>(`${this.apiUrl}/user/${user.id}`, user);
      }

    renewUserProfile() : void {
        this.getUserProfile().subscribe(
            data => {
                this.setUserProfile(data)
            }
        )
    }

}
