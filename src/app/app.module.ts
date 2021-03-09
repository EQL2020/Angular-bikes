import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { StationComponent } from './station/station.component';
import { MessagesComponent } from './messages/messages.component';
import { ContractsComponent } from './contracts/contracts.component';

@NgModule({
  declarations: [			
    AppComponent,
    StationsComponent,
    StationComponent,
      MessagesComponent,
      ContractsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
