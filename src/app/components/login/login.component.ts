import { StateUserService } from 'src/app/services/state-user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var FB: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  // init names vars & type
  isLoading: boolean;
  FormLogin: FormGroup;

  constructor(
    private FB: FormBuilder,
    private Auth: AuthService,
    private state_user: StateUserService
  ) {
    // init value vars
    this.FormLogin = this.FB.group({
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(11),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.isLoading = false;
  }

  // ngOnInit(): void {
  //   (window as any).fbAsyncInit = function () {
  //     FB.init({
  //       appId: '2108700079266288',
  //       cookie: true,
  //       xfbml: true,
  //       version: 'v3.1',
  //     });

  //     FB.AppEvents.logPageView();
  //   };

  //   (function (d, s, id) {
  //     var js: any,
  //       fjs: any = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, 'script', 'facebook-jssdk');
  // }

  // submitLogin() {
  //   console.log('submit login to facebook');
  //   // FB.login();
  //   FB.login((response: any) => {
  //     console.log('submitLogin', response);
  //     if (response.authResponse) {
  //       // this.toastr.successToastr('login successful', 'Success!');
  //       // set token_user in localStorage api
  //       localStorage.setItem('TOKEN_USER', response.authResponse.accessToken);
  //       this.state_user.navigated('/');
  //     } else {
  //       console.log('User login failed');
  //     }
  //   });
  // }

  login() {
    this.isLoading = true;

    this.Auth.logiIn({ ...this.FormLogin.value, udid: '023' }).subscribe({
      next: (res: any) => {
        this.isLoading = false;

        // Destructuring ES6
        const { msg, status, us } = res;
        const { api_token } = res.user;

        // set token_user in localStorage api
        localStorage.setItem('TOKEN_USER', api_token);
      },
      error: (err) => {
        this.isLoading = false;

        // Destructuring ES6
        const { msg, status } = err.error;
        alert(msg);
      },
      complete: () => this.state_user.navigated('/'),
    });
  }
}
