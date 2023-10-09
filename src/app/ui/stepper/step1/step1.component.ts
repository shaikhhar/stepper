import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { StepperService } from '../stepper.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  activeStep = 1;

  q1!: boolean; // Variables for capturing user inputs
  q2!: number;
  q3!: number;
  q4!: boolean;
  q5!: number;
  q6!: number;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.stepperService.answers$.subscribe((answers) => {
      const { q1, q2, q3, q4, q5, q6 } = answers[1];
      this.q1 = q1;
      this.q2 = q2;
      this.q3 = q3;
      this.q4 = q4;
      this.q5 = q5;
      this.q6 = q6;
    });
  }
  
  gotoStep(stepNumber: number, formValid: boolean | null) {
    if (formValid) {
      const { q1, q2, q3, q4, q5, q6 } = this;
      this.stepperService.setAnswers(1, {
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
      });
      this.stepperService.setCurrentStep(stepNumber);
    }
  }
}
