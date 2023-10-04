import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('300ms ease',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('300ms ease-out',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LeftComponent {
  activeStep = 1;
  q1!: string;  // Variables for capturing user inputs
  q2!: number;
  q3!: number;
  q4!: string;
  q5!: number;
  q6!: number;
  q7!: string;
  q8!: number;
  q9!: string;
  q10!: string;
  q11!: number;
  q12!: number;
  q13!: number;
  q14!: number;

  collapsedSteps: number[] = [2, 3, 4];

  isCollapsed(stepNumber: number): boolean {
    return this.activeStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.activeStep = this.activeStep === stepNumber ? this.activeStep : stepNumber;
  }

  gotoStep(stepNumber: number) {
    this.activeStep = stepNumber;
  }
}
