import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPage } from './inventory.page';
import { InventoryPageRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    InventoryPageRoutingModule,
    SharedModule
  ],
  declarations: [
    InventoryPage
  ],
  exports: []
})
export class InventoryPageModule { }
