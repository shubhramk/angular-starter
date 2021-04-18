import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';
import {  jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDataTableModule }   from 'jqwidgets-ng/jqxdatatable';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    jqxSplitterModule,
    jqxButtonModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxDataTableModule,
  ],
  exports: [
    CommonModule,
    jqxSplitterModule,
    jqxButtonModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxDataTableModule,
  ]
})
export class JqxwidgetModule { }
