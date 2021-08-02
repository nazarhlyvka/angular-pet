import { NgModule } from "@angular/core";
import { InProgressAnimComponent } from "./inProgress/inProgressAnim.component";
import { ScrollIconComponent } from "./scrollAnimIcon/scrollIcon.component";
import { SpinnerComponent } from "./spinner/spinner.component";


@NgModule({
  declarations: [SpinnerComponent,ScrollIconComponent, InProgressAnimComponent],
  exports: [SpinnerComponent, ScrollIconComponent, InProgressAnimComponent]
})

export class SharedModule {}