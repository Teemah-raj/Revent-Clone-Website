import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfreximComponent } from './afrexim.component';
import { AfreximOtherComponent } from './afrexim-other/afrexim-other.component';
import { AfreximResultsComponent } from './afrexim-results/afrexim-results.component';
import { AfreximDesignsComponent } from './afrexim-designs/afrexim-designs.component';
import { AfreximScopeComponent } from './afrexim-scope/afrexim-scope.component';
import { AfreximOverviewComponent } from './afrexim-overview/afrexim-overview.component';

@NgModule({
  declarations: [
    AfreximComponent,
    AfreximOtherComponent,
    AfreximResultsComponent,
    AfreximDesignsComponent,
    AfreximScopeComponent,
    AfreximOverviewComponent,
  ],
  imports: [CommonModule],
})
export class AfreximModule {}
