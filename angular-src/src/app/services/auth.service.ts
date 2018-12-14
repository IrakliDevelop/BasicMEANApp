import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'

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

  authenticateUser(user):any{
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers:headers})
      .pipe(map(response => response));
  }


  getProfile():any{
    //let headers = new HttpHeaders();
    this.loadToken();
    let headers = new  HttpHeaders({
      'Authorization':this.authToken,
      'Content-Type':'application/json'
    });
    return this.http.get('http://localhost:3000/users/profile', {headers:headers})
      .pipe(map(response => response));
  }

  


  storeUserData(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(){
    if (localStorage.id_token == undefined){
      return false;
    }
    const helper = new JwtHelperService();  
    return !helper.isTokenExpired(localStorage.id_token); 
}

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;

  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
