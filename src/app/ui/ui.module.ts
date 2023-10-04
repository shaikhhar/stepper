import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule } from '@angular/forms'
import { Step1Component } from './stepper/step1/step1.component';
import { Step2Component } from './stepper/step2/step2.component';
import { Step3Component } from './stepper/step3/step3.component';



@NgModule({
  declarations: [
    StepperComponent,
    Step1Component,
    Step2Component,
    Step3Component,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [StepperComponent]
})
export class UiModule { }
