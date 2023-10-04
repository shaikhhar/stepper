import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  currentStep = 1;
  step1Form!: FormGroup ;
  step2Form!: FormGroup ;
  step3Form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.step1Form = this.fb.group({});
    this.step2Form = this.fb.group({});
    this.step3Form = this.fb.group({});
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    // Handle form submission logic here
  }
}
