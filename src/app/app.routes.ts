import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';
import { rules } from './components/rules/rules';

export const routes: Routes = [
  { path: 'noticias', component: Noticias },
  { path: 'noticias/crear', component: NoticiaFormComponent }, // Ruta para crear
  { path: 'noticias/editar/:id', component: NoticiaFormComponent }, // Ruta para editar
  { path: 'docs/rules', component: rules },
  { path: '', redirectTo: 'docs/rules', pathMatch: 'full' }
];
