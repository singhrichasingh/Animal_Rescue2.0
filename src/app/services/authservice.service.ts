import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
   url="http://103.203.137.238"
  constructor(private http: HttpClient) { }

  loginAdmin(body: any): Observable<any> {
    let headers = new HttpHeaders();
   headers.append('Content-Type', 'application/json ');
   return this.http.get(this.url + 'PensionRevision/ValidateUserLogin',  { headers: headers }
   ).pipe(
     tap((res) => {
      // this.token = localStorage.setItem('token', res.token);
       //console.log(res);
     }),
   );
 }
}
