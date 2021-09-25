import { MenuConfigService } from './../../core/services/menu-config.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from '../../config/billing-menu-items';

@Component({
  templateUrl: './dashboard6.component.html',
  styleUrls: ['./dashboard6.component.css']
})
export class Dashboard6Component implements AfterViewInit, OnInit {
  
  constructor(
    private menuConfigService: MenuConfigService
  ) {}

  ngOnInit() {
    this.menuConfigService.setSidebarNavItems(ROUTES.filter(sidebarnavItem => sidebarnavItem));
  }

  ngAfterViewInit() {}
}
