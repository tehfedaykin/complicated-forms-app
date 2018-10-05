import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyDatepickerComponent),
      multi: true
    }
  ]
})
export class MyDatepickerComponent implements ControlValueAccessor, OnInit {

  @Input('value') _value = false;
  onChange: any = () => { };
  onTouched: any = () => { };
  public timeValue = new Date();
  public dateValue = new Date();
  constructor() { }

  ngOnInit() {
  }

  get value() {
    console.log('get value', this._value);
    return this._value;
  }

  set value(val) {
    this._value = val;
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
  //let's say we have an annoying requirement where the user should see a
  //pretty date format, but we need to submit mm-dd-yyyy to the server.
  //we can keep our pretty date displaying, but submit the date value we want!
    this.value = value;
  }

  inputValueChange(event) {
    // let date = this.dateValue;
    // let time = this.timeValue;
    // console.log('time val', this.timeValue);
    // let hours, minutes;
    // if (time && date) {
    //   hours = time.getHours();
    //   minutes = time.getMinutes();
    //   console.log('hours', hours);
    //   console.log('minutes', minutes);
    //   // date.setHours(hours);
    //   // date.setMinutes(minutes);
    // }
    //
    // console.log('done', date);
  }

}
