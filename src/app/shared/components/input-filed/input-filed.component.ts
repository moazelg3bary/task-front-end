import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-filed',
  templateUrl: './input-filed.component.html',
  styleUrls: ['./input-filed.component.scss'],
})
export class InputFiledComponent implements OnInit {

  // init props & input coming
  @Input('type') type: string | any;
  @Input('name') name: string | any;
  @Input('value') value: string | any;
  @Input('placeholder') placeholder: string | any;
  @Input('FormGroupParent') FormGroupParent: FormGroup | any;

  constructor() {}

  ngOnInit(): void {}
}
