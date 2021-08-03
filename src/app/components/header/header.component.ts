import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {I18nService} from '../../services/i18n.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  lang = localStorage.getItem('lang') || 'en'

  constructor(public translate: TranslateService, private i18nService: I18nService) { }

  changeLocale(locale: string) {
    localStorage.setItem('lang', locale)
    this.i18nService.changeLocale(locale);   
  }

}
