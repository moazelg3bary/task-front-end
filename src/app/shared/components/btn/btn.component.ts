import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  // init props & input coming
  @Input('type') type?: string;
  @Input('color') color?: string;
  @Input('title') title?: string;
  @Input('b_color') b_color?: string;
  @Input('bg_color') bg_color?: string;
  @Input('disabled') disabled?: boolean;
  @Input('isLoading') isLoading?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
