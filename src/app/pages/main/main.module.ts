import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PromoComponent } from './promo/promo.component';
import { AboutComponent } from './about/about.component';
import { WeOfferComponent } from './weOffer/weOffer.component';
import { WhyWeComponent } from './whyWe/whyWe.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    MainComponent,
    PromoComponent,
    AboutComponent,
    WeOfferComponent,
    WhyWeComponent,
    PlanComponent,
  ],
  imports: [
    MainRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: mainHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class MainModule {}

export function mainHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
