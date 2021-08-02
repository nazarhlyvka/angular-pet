import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { InProgressComponent } from './inProgress.component';
import { InProgressRoutingModule } from './inProgress.routing.module';

@NgModule({
  declarations: [InProgressComponent],
  imports: [
    SharedModule,
    InProgressRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: inProgressHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class InProgressModule {}

export function inProgressHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
