import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSignatureModule } from 'projects/ng-signature/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
