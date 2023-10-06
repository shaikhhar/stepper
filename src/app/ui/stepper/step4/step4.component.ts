import { Component, OnInit } from '@angular/core';
import { StepperService } from '../stepper.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  activeStep = 1;
  q1!: number; // Variables for capturing user inputs
  q2!: number;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.stepperService.answers$.subscribe((answers) => {
      const { q1, q2 } = answers[4];
      this.q1 = q1;
      this.q2 = q2;
    });
  }
  isCollapsed(stepNumber: number): boolean {
    return this.activeStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.activeStep =
      this.activeStep === stepNumber ? this.activeStep : stepNumber;
  }

  async gotoStep(stepNumber: number, formValid: boolean | null) {
    if (formValid) {
      const { q1, q2 } = this;
      this.stepperService.setAnswers(4, {
        q1,
        q2,
      });
      if (stepNumber === 3) {
        this.stepperService.setCurrentStep(stepNumber);
      }
      await this.stepperService.submitAnswer();
    }
  }
}
