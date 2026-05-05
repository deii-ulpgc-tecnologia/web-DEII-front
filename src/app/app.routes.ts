import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';
import { Asignatures } from './components/asignatures/asignatures';

export const routes: Routes = [
  { path: 'noticias', component: Noticias },
  { path: 'asignatura', component: Asignatures },
  { path: 'noticias/crear', component: NoticiaFormComponent }, // Ruta para crear
  { path: 'noticias/editar/:id', component: NoticiaFormComponent }, // Ruta para editar
  { path: '', redirectTo: 'asignatura', pathMatch: 'full' } //Cambiar despues el redirectTo a noticias
];
