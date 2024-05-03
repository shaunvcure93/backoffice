import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomingInvoicePage } from './incoming.page';
import { SharedModule } from '../../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    IncomingInvoicePage
  ],
  exports: []
})
export class IncomingInvoicePageModule { }
