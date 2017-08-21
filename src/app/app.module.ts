import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimationStretchDirective } from './animation-stretch.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimationStretchDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
