import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';
import { isDocEntryWithSourceInfo } from '@angular/compiler-cli';
import { Docs } from './components/docs/docs'; // Se añade ruta para el componente


export const routes: Routes = [
  { path: 'noticias', component: Noticias },
  { path: 'noticias/crear', component: NoticiaFormComponent }, // Ruta para crear
  { path: 'noticias/editar/:id', component: NoticiaFormComponent }, // Ruta para editar
  { path: 'docs', component: Docs }, // Ruta subida documentos
  { path: '', redirectTo: 'docs', pathMatch: 'full' }
];
