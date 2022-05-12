import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameServiceService } from './name-service.service';
import { NamesComponent } from './names/names.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
