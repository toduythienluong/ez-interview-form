import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  public getQuestions(interviewFormId: string) {
    /*
    TODO:
    Step 0: check the current form need to load
    Step 1: to call API to have the form-definition
    Step 2: having the form-definition, then we have a list of data-fields for the form
    Step 3: load filer-record(s) associated to the form
    Step 4: prepare data-model for the dynamic-form

    finally, we got a list of ui-component to display as below
    */

    const questions = this.buildFormElements(interviewFormId);

    return of(questions.sort((a, b) => a.order - b.order));
  }

  private buildFormElements(interviewFormId: string): QuestionBase<string>[] {
    const elementsOne: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'federal.personalinformation.firstName',
        label: 'First Name',
        value: 'Alice',
        required: true,
        order: 1
      })
    ];
    if (interviewFormId == 'interview-one')
      return elementsOne;

    const elementsTwo: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'federal.personalinformation.lastName',
        label: 'Last Name',
        value: 'Smith',
        required: true,
        order: 2
      })
    ];
    if (interviewFormId == 'interview-two')
      return elementsTwo;

    const elementsThree: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'federal.personalinformation.emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }),
      new DropdownQuestion({
        key: 'federal.personalinformation.gender',
        label: 'Gender',
        options: [
          { key: 'Male', value: 'male' },
          { key: 'Female', value: 'female' }
        ],
        order: 4
      })
    ];
    return elementsThree;
  }
}