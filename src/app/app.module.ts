import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFxqComponent } from './components/list-fxq/list-fxq.component';
import { FxqAddComponent } from './components/fxq-add/fxq-add.component';
import { FxqSymbolsComponent } from './components/fxq-symbols/fxq-symbols.component';
import { FxqSymbolTenorComponent } from './components/fxq-symbol-tenor/fxq-symbol-tenor.component';
import { FxqDetailComponent } from './components/fxq-detail/fxq-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFxqComponent,
    FxqAddComponent,
    FxqSymbolsComponent,
    FxqSymbolTenorComponent,
    FxqDetailComponent
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
