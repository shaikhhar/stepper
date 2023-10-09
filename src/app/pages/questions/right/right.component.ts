import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StepperService } from '../../../ui/stepper/stepper.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit{
  formResponse: any = {};
  formResponseKeys:any;
  formResponseEmpty = true;
  constructor(public stepperService: StepperService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.stepperService.formSubmissionResponse$ .subscribe(fsr => {
      if (fsr !== null) {
        this.formResponse = fsr;
        this.formResponseKeys = [];
        this.formResponseKeys = Object.keys(this.formResponse);
      } else {
        this.formResponse = {}; // Assign an empty object if fsr is null
      }
  
      this.formResponseEmpty = this.isFormResponseEmpty();
      this.cdr.detectChanges();
    })
  }

  isFormResponseEmpty() {
    return Object.keys(this.formResponse)?.length === 0;
  }

  getReponseKeys() {
    const responseKeys = Object.keys(this.formResponse)
  }

}
