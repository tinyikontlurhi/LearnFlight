import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginDTO } from '../models/Login';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient) { }

  public login(loginDTO: ILoginDTO) {

    return this.http.post<any>(`${environment.url}account/login`, loginDTO).pipe(
      map(organization => {
        // login is successful if there's a jwt in token response
        if (organization && organization.token) {
          sessionStorage.setItem("name", organization.name)
          sessionStorage.setItem("email", loginDTO.email);
          sessionStorage.setItem("token", organization.token);
        }

        return organization;
      })
    );
  }

  /**
   * @params token represents a token with the organization information
   * @returns a object with organization details
   */
}
