import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCheckboxesComponent),
      multi: true
    }
  ]
})
export class MyCheckboxesComponent implements ControlValueAccessor {
  @Input() data: any[];

  @Input('value') _value = [];
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    console.log('val', this._value);
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  //this is our "change" function
  //marks formControl as touched
  //marks formControl as valid/invalid
  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  //this is our "touch/blur" function
  //marks formControl as touched
  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  //this is how we write the value we want to the formControl
  writeValue(value:any) {
    this.value = value;
  }

  selectCheckbox(checkboxId) {
    const updatedArray = this.value;
    updatedArray.push(checkboxId);
    this.writeValue(updatedArray);
  }

  removeCheckbox(checkboxId) {
    var index = this.value.indexOf(checkboxId);
    if (index > -1) {
      this.value.splice(index, 1);
    }
  }

}
