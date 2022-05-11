import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameListComponent } from './name-list/name-list.component';
import { NameServiceService } from './name-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NameListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
