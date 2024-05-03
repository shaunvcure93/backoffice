import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutgoingInvoicePage } from './outgoing.page';
import { SharedModule } from '../../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    OutgoingInvoicePage
  ],
  exports: []
})
export class OutgoingInvoicePageModule { }
