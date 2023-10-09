import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { StepperService } from 'src/app/ui/stepper/stepper.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit{
  currentStep = 1;

  constructor(public stepperService: StepperService) {
    this.currentStep = stepperService.getCurrentStep();
  }

  ngOnInit(): void {
      this.stepperService.currentStep$.subscribe(s => {
        this.currentStep = s;
      })
  }
}
