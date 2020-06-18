import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentToChildModule } from './parent-to-child/parent-to-child.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentToChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
