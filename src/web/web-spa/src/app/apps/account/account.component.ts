import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrganizationService } from './../../core/services/organization.service';
import { MenuConfigService } from './../../core/services/menu-config.service';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../config/billing-menu-items';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  organizationForm: any;
  isDisabled = true;

  constructor(
    private menuConfigService: MenuConfigService,
    private organizationService: OrganizationService
  ) { 
    this.organizationForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl(''),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)

    });
  }


  ngOnInit() {
    this.menuConfigService.setSidebarNavItems(ROUTES.filter(sidebarnavItem => sidebarnavItem));
    let id = parseInt(sessionStorage.getItem("accountID") || "");

    if (id != null && id != undefined) {
      // send request to retrieve organization results
      this.organizationService.findOne(id).subscribe(data => {
        this.organizationForm.patchValue({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address
        })
      });
    } 
  }

  /**
   * enable edit feature of formControl
   */
  enableEdit() {
    this.email.enable();
    this.phone.enable();
    this.address.enable();
  }

  onSubmit() {

  }

  /**
   * Organization Form Properties
   */
  get id() {
    return this.organizationForm.get('id');
  }

  get name() {
    return this.organizationForm.get('name');
  }

  get email() {
    return this.organizationForm.get('email');
  }

  get phone() {
    return this.organizationForm.get('phone');
  }

  get address() {
    return this.organizationForm.get('organizationForm');
  }
}
