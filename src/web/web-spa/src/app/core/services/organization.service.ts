import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IOrganization } from '../models/IOrganization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(
    private http: HttpClient
  ) { }

  public findOne(id: number): Observable<IOrganization> {
    return this.http.get<IOrganization>(`${environment.url}organization/${id}`);
  }
}
