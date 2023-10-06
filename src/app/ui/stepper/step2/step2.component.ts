import { Component } from '@angular/core';
import { StepperService } from '../stepper.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  activeStep = 1;
  q1!: string; // Variables for capturing user inputs
  q2!: number;
  q3!: string;

  collapsedSteps: number[] = [2, 3, 4];

  constructor(private stepperService: StepperService) {}

  isCollapsed(stepNumber: number): boolean {
    return this.activeStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.activeStep =
      this.activeStep === stepNumber ? this.activeStep : stepNumber;
  }

  gotoStep(stepNumber: number, formValid: boolean | null) {
    if (formValid) {
      this.stepperService.setCurrentStep(stepNumber);
    }
  }
}
