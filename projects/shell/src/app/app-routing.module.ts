import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'departments',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://localhost:4201/remoteEntry.js',
        exposedModule: './DepartmentsModule',
      }).then((m) => m.DepartmentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
