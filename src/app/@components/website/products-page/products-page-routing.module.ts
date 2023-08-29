import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VybecashComponent } from './vybecash/vybecash.component';
import { ProductsPageComponent } from './products-page.component';
import { OptivaComponent } from './optiva/optiva.component';
import { AfreximComponent } from './afrexim/afrexim.component';

const routes: Routes = [
  {
    path: 'products-page',
    component: ProductsPageComponent,
    children: [
      { path: 'vybecash', component: VybecashComponent },
      { path: 'optiva', component: OptivaComponent },
      { path: 'afrexim', component: AfreximComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
