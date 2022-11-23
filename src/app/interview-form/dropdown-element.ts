import { ElementBase } from './element-base';

export class DropdownElement extends ElementBase<string> {
  override controlType = 'dropdown';
}