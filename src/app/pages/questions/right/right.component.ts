import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StepperService } from '../../../ui/stepper/stepper.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit{
  formResponse = {};
  constructor(public stepperService: StepperService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.stepperService.formSubmissionResponse$ .subscribe(fsr => {
      console.log('this.formResponse ', fsr)
      this.formResponse = fsr;
      this.cdr.detectChanges();
    })
  }

  isFormResponseEmpty() {
    return Object.keys(this.formResponse).length === 0;
  }

}
