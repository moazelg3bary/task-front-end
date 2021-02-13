import { StateUserService } from 'src/app/services/state-user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {
  // init names vars & type
  isLoading: boolean;
  country: any;
  city: [] | any;
  FormSingUp: FormGroup;

  constructor(private FB: FormBuilder ,private Auth: AuthService, private state_user: StateUserService) {
    // init FormSingUp
    this.FormSingUp = this.FB.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.pattern('[0-9]*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      birth_date: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      country: ['Country', Validators.required],
      city: ['City', Validators.required],
    });

    // init values vars
    this.isLoading = false;

    // get Countries to set in this.country
    this.Auth.getCountries().subscribe((res: any) => {
      this.country = res.Countrey;
    });
  }
  
  ngOnInit(): void {}
  
  // func get id country to get city
  selectCity(index: any) {

    this.country.filter((item: any) => {

      if(item.id == index.target.value) {
        this.city = item.cities;
      }
    });
  }

  // func register by create new user
  register() {

    this.isLoading = true

    this.Auth.register({ ...this.FormSingUp.value }).subscribe({
      //
      next: (res) => this.isLoading = false,
      error: (err) => {

        this.isLoading = false;

        // Destructuring ES6
        const { msg } = err.error;
        alert(msg);
      },
      complete: () => this.state_user.navigated('/login'),
    });
  }
}
