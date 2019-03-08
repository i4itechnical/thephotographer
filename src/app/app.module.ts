import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThephotographermaterialModule } from './thephotographermaterial.module';
import { ThephotographercoreModule } from './thephotographercore/thephotographercore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThephotographermaterialModule,
    ThephotographercoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
