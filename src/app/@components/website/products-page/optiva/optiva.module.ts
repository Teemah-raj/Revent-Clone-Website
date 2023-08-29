import { NgModule } from '@angular/core';
import { OptivaComponent } from './optiva.component';
import { CommonModule } from '@angular/common';
import { OptivaOtherComponent } from './optiva-other/optiva-other.component';
import { OptivaResultsComponent } from './optiva-results/optiva-results.component';
import { OptivaScopeComponent } from './optiva-scope/optiva-scope.component';
import { OptivaOverviewComponent } from './optiva-overview/optiva-overview.component';
import { OptivaDesignsComponent } from './optiva-designs/optiva-designs.component';

@NgModule({
  declarations: [
    OptivaComponent,
    OptivaOtherComponent,
    OptivaResultsComponent,
    OptivaScopeComponent,
    OptivaOverviewComponent,
    OptivaDesignsComponent,
  ],
  imports: [CommonModule],
})
export class OptivaModule {}
