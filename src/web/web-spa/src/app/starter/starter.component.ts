import { ROUTES } from './../config/documentation-menu-items';
import { MenuConfigService } from './../core/services/menu-config.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit, OnInit{

  subtitle: string;
  constructor(
    private menuConfigService: MenuConfigService
  ) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngOnInit() {
    this.menuConfigService.setSidebarNavItems(ROUTES.filter(sidebarnavItem => sidebarnavItem));
  }

  ngAfterViewInit() {}
}
