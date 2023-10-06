import { Component, OnInit } from '@angular/core';
import { StepperService } from '../stepper.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  activeStep = 1;
  q1!: boolean; // Variables for capturing user inputs
  q2!: number;
  q3!: string;

  collapsedSteps: number[] = [2, 3, 4];

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.stepperService.answers$.subscribe((answers) => {
      const { q1, q2, q3 } = answers[2];
      this.q1 = q1;
      this.q2 = q2;
      this.q3 = q3;
    });
  }

  isCollapsed(stepNumber: number): boolean {
    return this.activeStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.activeStep =
      this.activeStep === stepNumber ? this.activeStep : stepNumber;
  }

  gotoStep(stepNumber: number, formValid: boolean | null) {
    if (formValid) {
      const { q1, q2, q3 } = this;
      this.stepperService.setAnswers(2, {
        q1,
        q2,
        q3,
      });
      this.stepperService.setCurrentStep(stepNumber);
    }
  }
}
