import { Component } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {
  activeStep = 1;
  q1!: string;  // Variables for capturing user inputs
  q2!: number;
 

  isCollapsed(stepNumber: number): boolean {
    return this.activeStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.activeStep = this.activeStep === stepNumber ? this.activeStep : stepNumber;
  }

  gotoStep(stepNumber: number, formValid: boolean | null) {
    if (formValid) {
      console.log('submitted')
    }
  }

}
