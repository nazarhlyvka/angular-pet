import { NgModule } from '@angular/core'
import { NonExistentComponent } from './nonExistent.component';
import { NonExistentRoutingModule } from './nonExistent.routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [NonExistentComponent],
  imports: [
    NonExistentRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: NonExistentHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class NonExistentModule { }

export function NonExistentHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}