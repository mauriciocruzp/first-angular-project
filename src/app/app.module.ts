import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MarketNamePipe } from './pipes/market-name.pipe';

@NgModule({
  declarations: [AppComponent, CardComponent, ListComponent, DetailsComponent, MarketNamePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
