import { MenuConfigService } from './../../core/services/menu-config.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from '../../config/amanzijo-menu-items';

@Component({
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit, AfterViewInit {
  constructor(
    private menuConfigService: MenuConfigService
  ) {}

  ngOnInit() {
    this.menuConfigService.setSidebarNavItems(ROUTES.filter(sidebarnavItem => sidebarnavItem));
  }

  ngAfterViewInit() {}
}
