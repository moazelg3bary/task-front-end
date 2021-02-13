import { StateUserService } from 'src/app/services/state-user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // init names vars & type
  isLoading: boolean;
  FormLogin: FormGroup;

  constructor(private FB: FormBuilder, private Auth: AuthService, private state_user: StateUserService) {
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
    this.isLoading = false
  }

  ngOnInit(): void {}

  login() {
    this.isLoading = true

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
        alert(msg)
      },
      complete: () => this.state_user.navigated('/'),
    });
  }

}
