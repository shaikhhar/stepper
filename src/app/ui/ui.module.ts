import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { BaseStepperComponent } from './stepper/base-stepper/base-stepper.component';
import { StepperStepComponent } from './stepper/stepper-step/stepper-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    StepperComponent,
    BaseStepperComponent,
    StepperStepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [StepperComponent]
})
export class UiModule { }
