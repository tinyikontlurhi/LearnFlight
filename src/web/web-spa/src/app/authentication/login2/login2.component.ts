import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html'
})
export class Login2Component implements OnInit {
  loginform: any;
  recoverform = false;
  isLogin = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

   showRecoverForm() {
     this.loginform = !this.loginform;
     this.recoverform = !this.recoverform;
   }

  onSubmit() {
    this.authenticationService.login(this.loginform.value).subscribe(data => {
      this.router.navigate(['/dashboard/portal']);
    }, error => {
      this.isLogin = true;
    })
  }

  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }
}
