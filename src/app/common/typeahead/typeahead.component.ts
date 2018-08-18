import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyTypeaheadComponent),
      multi: true
    }
  ]
})
export class MyTypeaheadComponent implements ControlValueAccessor, OnInit {
  public selected;
  @Input() disabled = false;
  @Input() data: any[];
  @Input() displayVal;
  @Input() submitVal;

  @Input('value') _value = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit() {
  }

  get value() {
    console.log('get value', this._value);
    return this._value;
  }

  set value(val) {
    this._value = val;
    console.log('setting value', val);
    this.selectDropdown(val)
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
  writeValue(value) {
    console.log('writing value', value);
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectDropdown(val) {
    //display current value in typeahead
    if (val != undefined && val != '') {
      if (this.submitVal && this.data) {
        this.selected = this.data.filter(x => x[this.submitVal] == val)[0] ? this.data.filter(x => x[this.submitVal] == val)[0].name : '';
      }
      else {
        this.selected  = val;
      }
    }
    else {
      this.selected = null;
    }
  }

  onSelect(ev) {
    //let the formControl know the value's been changed
    this.onChange(ev.item[this.submitVal]);
    if (this.submitVal) {
      this.writeValue(ev.item[this.submitVal]);
    }
  }

  onBlur(ev) {
    //let the formControl know it's been touched
    this.onTouched();
  }


}
