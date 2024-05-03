import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePage } from './invoice.page';
import { InvoicePageRoutingModule } from './invoice-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    InvoicePageRoutingModule,
    SharedModule
  ],
  declarations: [
    InvoicePage
  ],
  exports: []
})
export class InvoicePageModule { }
