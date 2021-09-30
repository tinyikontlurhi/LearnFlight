import { OrganizationService } from './../../../core/services/organization.service';
import { ROUTES } from './../../../config/billing-menu-items';
import { MenuConfigService } from './../../../core/services/menu-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  filterCredits: any;
  credits: any;
  searchTerm: any;

  constructor(
    private menuConfigService: MenuConfigService,
    private organizationService: OrganizationService
  ) { 
    this.menuConfigService.setSidebarNavItems(ROUTES.filter(sidebarnavItem => sidebarnavItem));
  }

  ngOnInit(): void {
    this.organizationService.findAllCredits().subscribe(credits => {
      this.filterCredits = credits;
      this.credits = credits;
    });
  }

}
