import { Injectable } from '@angular/core';
import { TranslationModel } from '../../models/translation-model';

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService {

  private suffix: string = '.json';
  private prefix: string = 'i18n';
  private providers: TranslationModel[] = [];
  private queue: string[][] = [];
  private defaultLang: string = 'en';
  
  constructor() { }
}
