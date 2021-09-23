import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'login',
        component: Login2Component
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];
