import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";
import { UserComponent } from "./user/user.component";



const routes : Routes = [
  {path: '', component: FeaturesComponent},
  {path: ':id', component: UserComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
