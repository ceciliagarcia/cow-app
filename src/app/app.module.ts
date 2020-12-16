import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTING } from './app.routes';

import {CowsService} from './services/cows.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CowsComponent } from './components/cows/cows.component';
import { CowComponent } from './components/cow/cow.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CowsComponent,
    CowComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [CowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
