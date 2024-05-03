import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoicePage } from './add.page';
import { SharedModule } from '../../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AddInvoicePage
  ],
  exports: []
})
export class AddInvoicePageModule { }
