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

  /**
   * POST: /api/organization
   * @param organization contains organization details
   */
  public create(organization: IOrganization) {
    return this.http.post<any>(`${environment.url}organization`, organization);
  }



  /**
   * Credits
   */

   public findAllCredits() {
     return this.http.get<any>(`${environment.url}credits`);
   }
}
