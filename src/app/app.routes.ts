import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {CowsComponent} from './components/cows/cows.component';
import{ CowComponent} from './components/cow/cow.component';
import{ SearchComponent} from './components/search/search.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cows', component: CowsComponent },
  { path: 'cow/:id', component: CowComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});