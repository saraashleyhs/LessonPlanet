import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }
  
  public requestLogin(email:string, password:string): Observable<any> {
    return this.http.post<any>(this.API_URL + "/auth/login", 
    {email: email,
    password: password
    })
    .pipe(
      map(result=>{
        localStorage.setItem("token", result.token)
        return result;
      })
        )
  
  }

}
