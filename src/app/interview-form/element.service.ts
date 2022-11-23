import { Injectable } from '@angular/core';

import { DropdownElement } from './dropdown-element';
import { ElementBase } from './element-base';
import { TextboxElement } from './textbox-element';
import { of } from 'rxjs';
import { FormDefinitionService } from './form-definition.service';
import { FilerRecordService } from './filer-record.service';

@Injectable()
export class ElementService {
  constructor(private formDefinitionService: FormDefinitionService, private filerRecordService: FilerRecordService) {

  }
  public constructDynamicElements(interviewFormId: string) {
    var customerId = '293516';
    //Step 0: check the workflow to get the next-form to display, get the form-definition-id
    var formDefinitionId = this.getFormDefinitionId(interviewFormId);
    //Step 1: load form-definition by form-definition-id (over API from backend), with a list fo field-definitions, not frontend specific
    var formDefinition = this.formDefinitionService.getFormDefinition(formDefinitionId);
    //Step 2: transform it to a list Field Definition on the Form Definition to the list of Dynamic Elements
    var elements = this.transformToDynamicElements(interviewFormId, formDefinition);
    //Step 3: load the filer-record by customerId
    var filerRecord = this.filerRecordService.getFilerRecordByCustomerId('customerId');
    //Step 4: bind data value from filer-record to dynamic elements
    this.databind(filerRecord, elements);
    //Step 5: return the Dynamic Elements to master controller
    return of(elements.sort((a, b) => a.order - b.order));
  }

  private getFormDefinitionId(interviewFormId: string): string {
    return interviewFormId;
  }

  private databind(filerRecord: any, elements: ElementBase<string>[]) {

  }

  private transformToDynamicElements(interviewFormId: string, formDefinition: any): ElementBase<string>[] {
    if (interviewFormId == 'interview-one') {
      return this.buildElementOne();
    }

    if (interviewFormId == 'interview-two') {
      return this.buildElementTwo();
    }

    return this.buildElementThree();


  }
  private buildElementOne(): ElementBase<string>[] {
    var jsonData = {
      "formName": "interview-two",
      "fieldDefinitions": [
        {
          "id": 1,
          "displayText": "Last Name",
          "datamapping": "PersonalInformation.lastName",
          "type": "UserInput"
        }
      ]
    }

    //TODO: basically the function is to transform Field Definition as above to Dynamic Element as below

    const elementsOne: ElementBase<string>[] = [
      new TextboxElement({
        key: 'federal.personalinformation.firstName',
        label: 'First Name',
        value: '',
        required: true,
        order: 1
      })
    ];
    return elementsOne;
  }

  private buildElementTwo(): ElementBase<string>[] {
    const elementsTwo: ElementBase<string>[] = [
      new TextboxElement({
        key: 'federal.personalinformation.lastName',
        label: 'Last Name',
        value: 'Smith',
        required: true,
        order: 2
      })
    ];
    return elementsTwo;
  }

  private buildElementThree(): ElementBase<string>[] {
    const elementsThree: ElementBase<string>[] = [
      new TextboxElement({
        key: 'federal.personalinformation.emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }),
      new DropdownElement({
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