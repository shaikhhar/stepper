import { Component, Input } from '@angular/core';
// import { BaseStepperComponent } from '../base-stepper/base-stepper.component';
import { FormGroup, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-stepper-step',
  templateUrl: './stepper-step.component.html',
  styleUrls: ['./stepper-step.component.scss']
})
export class StepperStepComponent {
  @Input() stepNumber: number = 0;
  fb!: FormBuilder ;
  step1Form!: FormGroup;

  ngOnInit(): void {
    console.log('on stepper step')
    this.initForm();
  }

  initForm() {
    // Initialize form and validators for this step
    // Example:
    // this.step1Form = this.fb.group({
    //   name: [''],
    // });
  }

  isValid(): boolean {
    // Implement validation logic for this step
    // Example:
    // return this.step1Form.valid;
    return false; // Change to actual validation logic
  }

  onSubmit() {
    // Handle form submission logic for this step
  }
}
