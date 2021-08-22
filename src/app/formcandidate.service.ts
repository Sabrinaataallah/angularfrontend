import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormcandidateService {


  constructor(private  http: HttpClient) { }

  getAllCandidate() {
    return this.http.get('http://127.0.0.1:5000/listepersonne');
  }

  Inscri(url, data) {
    return this.http.post(url, data);
  }

}
