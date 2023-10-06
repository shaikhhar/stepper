import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  
  private currentStep = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStep.asObservable();

  constructor() { }

  getCurrentStep() {
    return 1;
  }

  setCurrentStep(step: number) {
    this.currentStep.next(step);
  }
}
