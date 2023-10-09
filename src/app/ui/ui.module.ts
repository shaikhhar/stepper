import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Step1Component } from './stepper/step1/step1.component';
import { Step2Component } from './stepper/step2/step2.component';
import { Step3Component } from './stepper/step3/step3.component';
import { Step4Component } from './stepper/step4/step4.component';



@NgModule({
  declarations: [
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ]
})
export class UiModule { }
