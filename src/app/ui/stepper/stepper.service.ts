import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private currentStep = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStep.asObservable();

  private answers = new BehaviorSubject<any>({ 1: {}, 2: {}, 3: {}, 4: {} });
  public answers$ = this.answers.asObservable();

  private formSubmissionResponse = new BehaviorSubject<any>(null);
  public formSubmissionResponse$ = this.formSubmissionResponse.asObservable();

  public loading = false;

  answersBody: any = {
    'company-insurance': {},
    'man-details': {},
    csr: {},
    'revenue-details': {},
  };

  constructor(private httpClient: HttpClient) {}

  getCurrentStep() {
    return 1;
  }

  setCurrentStep(step: number) {
    this.currentStep.next(step);
  }

  setAnswers(step: number, answers: any) {
    const currentAnswers = this.answers.value;
    currentAnswers[step] = answers;
    this.answers.next(currentAnswers);
    console.log('answers ', this.answers.value);
  }

  getFormBody() {
    const answers = this.answers.value;
    // step1 answers
    this.answersBody['company-insurance'][
      'wthr-medinsurance-applicable-company'
    ] = answers[1].q1;
    if (answers[1].q1) {
      this.answersBody['company-insurance']['company-age'] = answers[1].q2;
      this.answersBody['company-insurance']['company-medicalinsurance-amt'] =
        answers[1].q3;
    }
    this.answersBody['company-insurance'][
      'wthr-medinsurance-applicable-subsidiary'
    ] = answers[1].q4;
    if (answers[1].q4) {
      this.answersBody['company-insurance']['subsidiary-age'] = answers[1].q5;
      this.answersBody['company-insurance']['subsidiary-medicalinsurance-amt'] =
        answers[1].q6;
    }
    // step2 answers
    this.answersBody['man-details']['wthr-in_manufacture-business'] =
      answers[2].q1;
    if (answers[2].q1) {
      this.answersBody['man-details']['rent-paid'] = answers[2].q2;
      this.answersBody['man-details']['shade-location'] = answers[2].q3;
    }

    // step3 answers
    this.answersBody['csr']['wthr-csr'] = answers[3].q1;
    if (answers[3].q1) {
      this.answersBody['csr']['company-contribution'] =
        answers[3].q2;
      this.answersBody['csr']['people-contribution'] =
        answers[3].q3;
    }

    // step4 answers
    this.answersBody['revenue-details']['tot-revenue'] = answers[4].q1;
    this.answersBody['revenue-details']['tot-revenue-frm-operation'] =
      answers[4].q2;
    return this.answersBody;
  }

  async submitAnswer() {
    console.log('FormBody ', this.getFormBody())
    this.loading = true;
    const response = await lastValueFrom(
      this.httpClient.post('/api/company-profile/input', this.getFormBody())
    );
    this.loading = false;
    console.log('response ', response);
    this.formSubmissionResponse.next(response);

  }
}
