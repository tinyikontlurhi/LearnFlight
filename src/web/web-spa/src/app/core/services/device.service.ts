import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDevice } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient
  ) { }

  findAllDevices() {
    return this.http.get<any>(`${environment.url}devices`, { reportProgress: true, observe: 'events'});
  }

  findOne(id: number) {
    return this.http.get<any>(`${environment.url}devices/${id}`);
  }

  create(device: any) {
    return this.http.post<any>(`${environment.url}devices`, device, {reportProgress: true, observe: 'events'});
  }

  update(device: any) {
    // return this.http.put<any>(`${environment.url}devices`, device, { reportProgress: true, observe: 'events'})
  }

  delete(id: number) {
    return this.http.delete<any>(`${environment.url}devices/${id}`);
  }
}
