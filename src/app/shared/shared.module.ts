import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFiledComponent } from './components/input-filed/input-filed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [InputFiledComponent, BtnComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [InputFiledComponent, BtnComponent]
})
export class SharedModule { }
