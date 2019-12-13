import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILesson } from '../interfaces/i-lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }
  // CRUDL methods go here and return
   _apiURL = '';

  getlessons(): Observable<any>{
    return this.http.get<ILesson[]>(this._apiURL);
  }

}
