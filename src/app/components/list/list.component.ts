import { StateUserService } from 'src/app/services/state-user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  // init names & type vars
  Categories: {}[] | any

  constructor(private Auth: AuthService, private state_user: StateUserService) {}

  ngOnInit(): void {

    // get Categories to set in this.Categories
    this.state_user.getCategories().subscribe((res: any) => this.Categories =  res.Categories);

  }

  // if run token user will remove from browser
  logOut() {
    this.Auth.logOut();
  }
}
