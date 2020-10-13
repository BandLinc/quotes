import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    ViewQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
