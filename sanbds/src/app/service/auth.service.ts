import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, throwError } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map, catchError} from 'rxjs/operators';
import { from } from 'rxjs';
const TOKEN = 'TOKEN';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
      this.user = afAuth.authState;
    }

    authUser() {
      return this.user;
    }

    get currentUserID(): string {
      return this.authState !== null ? this.authState.user.uid : '';
    }

    logIn(email: string, password: string) {
      return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
        .pipe(map((userCredential) => {
          this.authState = userCredential;
          this.setLoggedIn(userCredential);
          this.setUserStatus('online');
          this.router.navigate(['chat']);
        },
        catchError(
          error => {
            console.log(error);
            return throwError(error);
          })
        ));
    }

    logOut() {
      this.setUserStatus('offline')
      this.afAuth.auth.signOut();
      this.unsetLoggedIn();
      this.router.navigate(['login']);
    }

    signUp(email: string, password: string, displayName: string) {
      return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password)).
              pipe(map((user) => {
                this.authState = user;
                this.setLoggedIn(user);
                this.setUserData(email, displayName);
              }), catchError(error => {
                console.log(error);
                return throwError(error);
              }));
    }

    setUserData(email: string, displayName: string): void {
      const path = `users/${this.currentUserID}`;
      const data = {
        email: email,
        displayName: displayName,
        status: 'online'
      };

      this.db.object(path).set(data)
        .catch(error => console.log(error));
    }

    setUserStatus(status: string) {
      const path = `users/${this.currentUserID}`;
      const data = {
        status: status
      }

      this.db.object(path).update(data)
        .catch(error => console.log(error));
    }

    isLogged(): boolean {
      if (localStorage.getItem('currentUser')) {
        return true
      }
      return false
    }

    setLoggedIn(user: firebase.auth.UserCredential) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    unsetLoggedIn() {
      localStorage.removeItem('currentUser');
    }

    getUsers(): AngularFireList<firebase.User> {
      const path = 'users';
      return this.db.list(path);
    }

}
