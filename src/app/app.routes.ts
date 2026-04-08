import { Routes } from '@angular/router';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterlistComponent },
  { path: 'filter', component: CharacterfilterComponent },
  { path: 'characters/:id', component: CharacterdetailsComponent },
  { path: '**', redirectTo: 'characters' }
];
