import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building/containers/building/building.component';

const routes: Routes = [
  { path: '', redirectTo: '/building', pathMatch: 'full' },
  {
    path: 'building',
    loadChildren: () =>
      import('./building/building.module').then((m) => m.BuildingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
