import { Component, ViewChild, ElementRef } from '@angular/core';
import { StepperService } from '../stepper.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  activeStep = 1;



  q1!: string;  // Variables for capturing user inputs
  q2!: number;
  q3!: number;
  q4!: string;
  q5!: number;
  q6!: number;

  constructor(private stepperService: StepperService) {}


  isCollapsed(stepNumber: number): boolean {
    return this.activeStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.activeStep = this.activeStep === stepNumber ? this.activeStep : stepNumber;
  }

  gotoStep(stepNumber: number, formValid:boolean | null) {
    if(formValid) {
      this.stepperService.setCurrentStep(stepNumber);
    }
  }

}
