import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { User } from '../interfaces/User';
import { Login } from '../interfaces/Login';
import { Observable } from 'rxjs';
import { ResponseAccess } from '../interfaces/responseAccess';


@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private http = inject(HttpClient);
  private url: string = appsettings.apiUrl;

  constructor() { }

  register(object: User): Observable<ResponseAccess> {
    return this.http.post<ResponseAccess>(`${this.url}Access/Register`, object)
  }

  login(object: Login): Observable<ResponseAccess> {
    return this.http.post<ResponseAccess>(`${this.url}Access/Login`, object)
  }

  tokenValidation(token: string): Observable<ResponseAccess> {
    return this.http.get<ResponseAccess>(`${this.url}Acceso/ValidarToken?token=${token}`)
}
}
