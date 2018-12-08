import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;


  constructor(private http: HttpClient) { }

  registerUser(user):any{
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers:headers})
      .pipe(map(response => response));
  }
}
