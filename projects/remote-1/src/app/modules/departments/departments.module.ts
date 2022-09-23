import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DeparmentsListComponent } from './components/deparments-list/deparments-list.component';

@NgModule({
  declarations: [DeparmentsListComponent],
  imports: [CommonModule, DepartmentsRoutingModule],
})
export class DepartmentsModule {}
