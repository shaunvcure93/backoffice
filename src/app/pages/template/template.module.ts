import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePage } from './template.page';
import { TemplatePageRoutingModule } from './template-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    TemplatePageRoutingModule,
    SharedModule
  ],
  declarations: [
    TemplatePage
  ],
  exports: []
})
export class TemplatePageModule { }
