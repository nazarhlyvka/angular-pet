import { NgModule } from "@angular/core";
import { NamesFilterPipe } from "./nameFilter.pipe";

@NgModule({
  declarations: [NamesFilterPipe],
  exports: [NamesFilterPipe]
})

export class PipesModule {}