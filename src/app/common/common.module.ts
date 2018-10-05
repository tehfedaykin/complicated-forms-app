import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TypeaheadModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { MyTypeaheadComponent } from './typeahead/typeahead.component';
import { MyCheckboxesComponent } from './checkboxes/checkboxes.component';
import { MyDatepickerComponent } from './datepicker/datepicker.component';


@NgModule({
  declarations: [
    MyTypeaheadComponent,
    MyCheckboxesComponent,
    MyDatepickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [
    MyTypeaheadComponent,
    MyCheckboxesComponent,
    MyDatepickerComponent
  ],
  providers: [
  ],
  bootstrap: []
})
export class CommonModule { }
