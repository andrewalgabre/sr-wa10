import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './containers/building/building.component';
import { BuildingInfoComponent } from './components/building-info/building-info.component';


@NgModule({
  declarations: [BuildingComponent, BuildingInfoComponent],
  imports: [
    CommonModule,
    BuildingRoutingModule
  ]
})
export class BuildingModule { }
