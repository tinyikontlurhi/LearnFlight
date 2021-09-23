import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';

import { AuthenticationRoutes } from './authentication.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule
  ],
  declarations: [
    NotfoundComponent,
    SignupComponent,
    LockComponent,
    Login2Component
  ]
})
export class AuthenticationModule {}
