import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decode } from 'jwt-decode';
import { UrlService } from './url.service'
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL;
  private currentUserSubject: BehaviorSubject<IUser>;
  private currentUser: Observable<IUser>;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': 'true'
    })
  };
  constructor(private http: HttpClient,
              public jwtHelper: JwtHelperService,
              private URL: UrlService
              ) {
                this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
                this.currentUser = this.currentUserSubject.asObservable();
               }
  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public requestLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_URL + '/auth/login',
    {email: email,
     password: password
    })
    .pipe(
      map(result=>{
        localStorage.setItem('token', result.token);
        console.log(result);
        return result;
      })
        );
  }
public isAuthenicated(): boolean {
  //get the token
  const token = this.getToken();
  // Check whether the token is expired and return
  // true or false
  return !this.jwtHelper.isTokenExpired(token);
}

logout() {
  localStorage.removeItem('currentuser');
  this.currentUserSubject.next(null);
}

decodeToken() {
  const token = decode(this.getToken());
  return token;
}
}
