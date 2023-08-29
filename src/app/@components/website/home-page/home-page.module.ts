import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomePageComponent } from './home-page.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomePerformanceComponent } from './home-performance/home-performance.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeHeaderComponent,
    HomeServicesComponent,
    HomePerformanceComponent,
    HomeBlogComponent,
    HomeEnterpriseComponent,
    HomeAboutComponent,
    HomeClientComponent,
  ],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
})
export class HomePageModule {}
