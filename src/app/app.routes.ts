import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';

export const routes: Routes = [
    { path: 'noticias', component: Noticias },
    { path: '', redirectTo: 'noticias', pathMatch: 'full' }
];
