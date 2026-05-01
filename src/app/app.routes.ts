import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';
import { DocsReviewComponent } from './components/docs-review/docs-review';

export const routes: Routes = [
  { path: 'noticias', component: Noticias },
  { path: 'noticias/crear', component: NoticiaFormComponent }, // Ruta para crear
  { path: 'noticias/editar/:id', component: NoticiaFormComponent }, // Ruta para editar
  { path: 'docs-review', component: DocsReviewComponent }, // Ruta para revisar documentos
  { path: '', redirectTo: 'noticias', pathMatch: 'full' }
];