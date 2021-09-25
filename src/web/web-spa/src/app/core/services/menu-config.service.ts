import { PortalMenuConfig } from './../../config/portal-menu';
import { Injectable } from '@angular/core';
import { ROUTES } from '../../shared/sidebar/menu-items';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuConfigService {

  public menuItems = new BehaviorSubject<any>({});
  public sidebarnavItems = this.menuItems.asObservable();

  public portalMenuConfig: any = new PortalMenuConfig();

  constructor() { }

  get portalMenuItems() {
    return this.portalMenuConfig.config.services;
  }

  public setSidebarNavItems(menuItems: any) {
    this.menuItems.next(menuItems);
  }



}
