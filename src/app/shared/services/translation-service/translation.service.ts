import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { TranslationLoaderService } from '../translation-loader-service/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { UserPreferencesService } from '../user-preferences-service/user-preferences.service';


export const TRANSLATION_PROVIDER = new InjectionToken('Injection token for translation provider.')
export interface TranslationProvider {
  name: string;
  source: string;
}

@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  defaultLang: string = '';
  userLang: string = '';
  customLoader: TranslationLoaderService | undefined;

  constructor(public translateService: TranslateService,
    private userPreferencesService: UserPreferencesService,
    @Optional() @Inject(TRANSLATION_PROVIDER) providers :TranslationProvider[]) {
      this.customLoader = <TranslationLoaderService> this.translateService.currentLoader;
      this.defaultLang = 'en';
      translateService.setDefaultLang(this.defaultLang);
      
      }
}
