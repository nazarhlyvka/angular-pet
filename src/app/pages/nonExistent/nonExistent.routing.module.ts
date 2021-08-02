import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonExistentComponent } from './nonExistent.component';

const routes: Routes = [
  {path: '', component: NonExistentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonExistentRoutingModule { }