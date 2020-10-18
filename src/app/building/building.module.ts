import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './containers/building/building.component';
import { BuildingInfoComponent } from './components/building-info/building-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BuildingComponent, BuildingInfoComponent],
  imports: [SharedModule, BuildingRoutingModule],
})
export class BuildingModule {}
