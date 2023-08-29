import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './products-page.component';
import { CommonModule } from '@angular/common';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { VybecashModule } from './vybecash/vybecash.module';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { OptivaModule } from './optiva/optiva.module';
import { AfreximModule } from './afrexim/afrexim.module';

@NgModule({
  declarations: [ProductsPageComponent, ProductsHeaderComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    VybecashModule,
    OptivaModule,
    AfreximModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class ProductsPageModule {}
