import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFiledComponent } from './input-filed.component';

describe('InputFiledComponent', () => {
  let component: InputFiledComponent;
  let fixture: ComponentFixture<InputFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFiledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
