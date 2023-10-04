import { Component, OnInit, AfterContentInit, Input, QueryList, ContentChildren } from '@angular/core';
import { StepperStepComponent } from '../stepper-step/stepper-step.component';

@Component({
  selector: 'app-base-stepper',
  templateUrl: './base-stepper.component.html',
  styleUrls: ['./base-stepper.component.scss']
})
export class BaseStepperComponent implements OnInit, AfterContentInit {
  @Input() currentStep = 1;
  @ContentChildren(StepperStepComponent) stepList: QueryList<StepperStepComponent> | undefined;

  steps: StepperStepComponent[] = [];

  ngOnInit(): void {
    console.log('on base stepper')
  }

 ngAfterContentInit(): void {
  console.log('stepList', this.stepList)
  this.updateSteps();
 }

  updateSteps() {
    if (this.stepList) {
      this.steps = this.stepList.toArray();
    }
  }

  isCurrentStepValid(): boolean {
    return this.steps[this.currentStep - 1]?.isValid() || false;
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

}
