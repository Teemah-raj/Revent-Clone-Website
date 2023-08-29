import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VybecashComponent } from './vybecash.component';
import { VybecashResultsComponent } from './vybecash-results/vybecash-results.component';
import { VybecashDesignsComponent } from './vybecash-designs/vybecash-designs.component';
import { VybecashOtherComponent } from './vybecash-other/vybecash-other.component';
import { VybecashScopeComponent } from './vybecash-scope/vybecash-scope.component';
import { VybecashOverviewComponent } from './vybecash-overview/vybecash-overview.component';

@NgModule({
  declarations: [
    VybecashComponent,
    VybecashResultsComponent,
    VybecashDesignsComponent,
    VybecashOtherComponent,
    VybecashScopeComponent,
    VybecashOverviewComponent,
  ],
  imports: [CommonModule],
})
export class VybecashModule {}
