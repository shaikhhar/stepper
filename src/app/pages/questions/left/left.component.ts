import { Component } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';


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
            style({  opacity: 1 }),
            animate('300ms ease-out', 
                    style({opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LeftComponent {
  visibleStep = 1;
  collapsedSteps: number[] = [2, 3, 4];
  isCollapsed(stepNumber: number): boolean {
    return this.visibleStep !== stepNumber;
  }

  toggleStep(stepNumber: number) {
    this.visibleStep = this.visibleStep === stepNumber ? this.visibleStep : stepNumber;
  }

  gotoStep(stepNumber: number) {
    this.visibleStep = stepNumber;
  }
}
