import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layout
import { BlankLayout } from './layout/blank/blank.component';
import { MainLayout } from './layout/main/main.component';

const routes: Routes = [
  {
    path: 'invoice',
    component: MainLayout,
    loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoicePageModule)
  },
  {
    path: 'inventory',
    component: MainLayout,
    loadChildren: () => import('./pages/inventory/inventory.module').then(m => m.InventoryPageModule)
  },
  {
    path: 'template',
    component: MainLayout,
    loadChildren: () => import('./pages/template/template.module').then(m => m.TemplatePageModule)
  },
  { path: '', redirectTo: 'invoice/incoming', pathMatch: 'full' },
  { path: '**', redirectTo: 'invoice/incoming', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
