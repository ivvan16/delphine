import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private mailUrl = 'https://emails-783b.restdb.io/rest/emails';

  constructor(private http: HttpClient) { }

  sendMail(mail: string) {
    const body = { 'content-type': "application/json",
    'x-apikey': "d006fd16d3a0249113fbe0baddd5ae50032cf",
    'cache-control': "no-cache",
    'email': mail };

    return this.http.post(this.mailUrl, body).subscribe();
  }
}
