import { OrganizationService } from './../../core/services/organization.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  organizationForm: any;
  isTermAccept = false;
  isProgress = false;           // variable holds the state of the progress spinner @see signup.component.html

  constructor(
    private organizationService: OrganizationService,
    private notifier: NotifierService,
    private router: Router
  ) {}

  ngOnInit() {
    this.organizationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  /**
   * @method submits signup details the organization api
   * @returns payloadDTO which contains the token, email address and organization name
   * @see PaloadDTO /modes/PayloadDTO
   */
  onSubmit() {
    this.isProgress = true;

    this.organizationService.create(this.organizationForm.value).subscribe(data => {
      this.notifier.notify('success', 'Successfully registered');
      this.router.navigate(['/authentication/login']);
      this.isProgress = false;
    }, error => {
      this.isProgress = false;
      this.notifier.notify(`success`, `Something went wrong. Our team has been notified. If the problem persists, please contact Vidly Support. Error Code: 0xefe4532`);
      console.error(error);
      // TODO integrate to ticket system to post issues when error occurs
    });
  }

  acceptTerms(event: any) {
    alert('test');
    this.isTermAccept = true;
  }

  /**
   * Form Properties
   */

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
     return this.organizationForm.get('address');
   }

   get password() {
     return this.organizationForm.get('password');
   }
}
