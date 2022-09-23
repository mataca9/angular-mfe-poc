import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentsListComponent } from './components/deparments-list/deparments-list.component';

export const DEPARTMENT_ROUTES: Routes = [
  { path: '', component: DeparmentsListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(DEPARTMENT_ROUTES)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
