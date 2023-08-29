import { NgModule } from '@angular/core';
import { WebsiteComponent } from './website.component';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home-page/home-page.module';
import { WebsiteRoutingModule } from './website-routing.module';
import { FooterIdeaComponent } from './footer/footer-idea/footer-idea.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsPageModule } from './products-page/products-page.module';

@NgModule({
  declarations: [WebsiteComponent, FooterComponent, FooterIdeaComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    HomePageModule,
    ProductsPageModule,
  ],
})
export class WebsiteModule {}
