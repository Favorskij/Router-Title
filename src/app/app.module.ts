import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {TitleStrategy} from "@angular/router";
import {TitleStrategyService} from "./title-strategy.service";

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: TitleStrategy, useClass: TitleStrategyService},],
  bootstrap: [AppComponent]
})
export class AppModule { }
