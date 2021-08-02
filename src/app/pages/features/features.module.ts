import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FeaturesComponent } from './features.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FeaturesRoutingModule } from './features.routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    PipesModule,
    FormsModule,
    FeaturesRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory:featuresHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
})
export class FeaturesModule {}

export function featuresHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}