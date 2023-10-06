import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { StepperService } from 'src/app/ui/stepper/stepper.service';

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
export class LeftComponent implements OnInit{
  currentStep = 1;

  constructor(private stepperService: StepperService) {
    this.currentStep = stepperService.getCurrentStep();
  }

  
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

  ngOnInit(): void {
      this.stepperService.currentStep$.subscribe(s => {
        this.currentStep = s;
      })
  }

  isCollapsed(stepNumber: number): boolean {
    return this.currentStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.currentStep = this.currentStep === stepNumber ? this.currentStep : stepNumber;
  }

  gotoStep(stepNumber: number) {
    this.currentStep = stepNumber;
  }
}
