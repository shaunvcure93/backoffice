import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicePage } from './invoice.page';
import { AddInvoicePage } from './add/add.page';
import { IncomingInvoicePage } from './incoming/incoming.page';
import { OutgoingInvoicePage } from './outgoing/outgoing.page';

const routes: Routes = [
  {
    path: 'add',
    component: AddInvoicePage,
    loadChildren: () => import('../invoice/add/add.module').then(m => m.AddInvoicePageModule)
  },
  {
    path: 'incoming',
    component: IncomingInvoicePage,
    loadChildren: () => import('../invoice/incoming/incoming.module').then(m => m.IncomingInvoicePageModule)
  },
  {
    path: 'outgoing',
    component: OutgoingInvoicePage,
    loadChildren: () => import('../invoice/outgoing/outgoing.module').then(m => m.OutgoingInvoicePageModule)
  },
  { path: '', redirectTo: 'incoming', pathMatch: 'full' },
  { path: '**', redirectTo: 'incoming', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicePageRoutingModule { }


