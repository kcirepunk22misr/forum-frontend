import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL: string = environment.url;
  public identity;
  public token;

  constructor(private _http: HttpClient) {}

  register(user: User): Observable<User> {
    /* Convertir el objeti del usuario a un json string */
    let body = JSON.stringify(user);

    /* Definir las cabeceras */
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    /* Hacer peticion ajax */
    return this._http
      .post<User>(`${this.URL}/register`, body, { headers })
      .pipe(
        map((resp: any) => {
          if (resp.ok) {
            return resp.usuario;
          }
        })
      );
  }

  signin(user: User): Observable<any> {
    /* Convertir el objeti del usuario a un json string */
    let body = JSON.stringify(user);

    /* Definir las cabeceras */
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(`${this.URL}/login`, body, { headers });
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (
      identity &&
      identity != null &&
      identity != undefined &&
      identity != 'undefined'
    ) {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));

    if (token && token != null && token != undefined && token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}
