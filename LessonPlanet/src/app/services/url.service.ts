import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  URL: string;

  constructor() { }

  getURL() {
    this.URL = '';
    return this.URL;
  }
}
