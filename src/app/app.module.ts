import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibBModule } from '@test/libB';
import { LibCModule } from '@test/libC';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibBModule,
    LibCModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
