import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private mailUrl = 'https://emails-783b.restdb.io/rest/emails';

  constructor(private http: HttpClient) { }

  sendMail(mail: string): Observable<any> {
    const headers = {
      'Content-type': "application/json",
      'x-apikey': "d006fd16d3a0249113fbe0baddd5ae50032cf",
      'Cache-control': "no-cache",
    };

    return this.http.post(this.mailUrl, { 'email': mail }, { headers: new HttpHeaders(headers)});
  }
}
