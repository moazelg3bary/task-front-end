import { StateUserService } from 'src/app/services/state-user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  // init names & type vars
  Categories: {}[] | any;
  message: any;

  constructor(
    private Auth: AuthService,
    private state_user: StateUserService,
    private messagingService: MessagingService
  ) {}

  ngOnInit(): void {
    // get Categories to set in this.Categories
    this.state_user
      .getCategories()
      .subscribe((res: any) => (this.Categories = res.Categories));

    // push Notification
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

    this.Auth.pushNotification({
      notification: {
        title: 'Hey there',
        body: 'Subscribe to might ghost hack youtube channel',
      },
      "to" : localStorage.getItem('TOKEN_NOTE'),
    });    

  }

  // just test Notification
  ngAfterViewInit() {
    setTimeout(() => {
      document.querySelector('.box_note')?.classList.add('push')
    }, 1000);
    setTimeout(() => {
      document.querySelector('.box_note')?.classList.remove('push');
    }, 4000);    
  }

  // if run token user will remove from browser
  logOut() {
    this.Auth.logOut();
  }
}
