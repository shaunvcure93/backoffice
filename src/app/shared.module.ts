import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// component
import { ButtonBox } from './components/button/button.component';
import { InputBox } from './components/input/input.component';
import { TableList } from './components/table/table.component';
import { DialogPop } from './components/dialog/dialog.component';
import { StepperBox } from './components/stepper/stepper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ButtonBox,
    InputBox,
    TableList,
    DialogPop,
    StepperBox
  ],
  declarations: [
    ButtonBox,
    InputBox,
    TableList,
    DialogPop,
    StepperBox
  ],
  providers: [
  ]
})
export class SharedModule { }
