import { Injectable } from '@angular/core';

import { DropdownElement } from './dropdown-element';
import { ElementBase } from './element-base';
import { TextboxElement } from './textbox-element';
import { of } from 'rxjs';

@Injectable()
export class FormDefinitionService {
  public getFormDefinition(formDefinitionId: string): any {
    if (formDefinitionId == 'interview-one')
      return this.getFormDefinitionOne();

    if (formDefinitionId = 'interview-two')
      return this.getFormDefinitionTwo();

    if (formDefinitionId = 'interview-three')
      return this.getFormDefinitionThree();

    return {};
  }

  private getFormDefinitionOne() {
    return {
      "formName": "interview-one",
      "fieldDefinitions": [
        {
          "id": 1,
          "displayText": "First Name",
          "datamapping": "PersonalInformation.firstName",
          "type": "UserInput"
        }
      ]
    }
  }

  private getFormDefinitionTwo() {
    return {
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
  }

  private getFormDefinitionThree() {
    return {
      "formName": "interview-three",
      "fieldDefinitions": [
        {
          "id": 1,
          "displayText": "Email Address",
          "datamapping": "PersonalInformation.emailAddress",
          "type": "UserInput"
        }
      ]
    }
  }
}
