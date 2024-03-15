import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MainPage} from "./children/pages/main/main.page";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {da_DK, ko_KR, NzI18nService, provideNzI18n} from "ng-zorro-antd/i18n";
import {registerLocaleData} from "@angular/common";
import en from '@angular/common/locales/en';
import ko from '@angular/common/locales/ko';
import {DummyService} from "./children/services/dump.service";
import {QRCodeModule} from "angularx-qrcode";
import {HOST_TOKEN} from "./tokens/host.token";
import {DataService} from "./data/data.service";
import {HttpClientModule} from "@angular/common/http";
registerLocaleData(ko);

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    children: [
      {
        path: '',
        component: MainPage
      }
    ]
  }
];




@NgModule({
  declarations: [
    AppComponent,
    MainPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSliderModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule
  ],
  providers: [
    NzI18nService,
    provideNzI18n(ko_KR),
    DummyService,
    DataService,
    { provide: HOST_TOKEN, useValue: 'http://158.160.144.155:8000' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
