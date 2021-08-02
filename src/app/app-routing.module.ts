import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)},
  {path: 'features', loadChildren: () => import('./pages/features/features.module').then(m => m.FeaturesModule)},
  {path: 'inprogress', loadChildren: () => import('./pages/inProgress/inProgress.module').then(m => m.InProgressModule)},
  {path: 'nonexistent', loadChildren: () => import('./pages/nonExistent/nonExistent.module').then(m => m.NonExistentModule)},
  {path: 'advantages', redirectTo: 'inprogress'},
  {path: 'signin', redirectTo: 'inprogress'},
  {path: '**', redirectTo:'nonexistent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
