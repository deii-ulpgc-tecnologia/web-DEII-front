import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';

export const routes: Routes = [
  { path: 'noticias', component: Noticias },
  { path: 'noticias/crear', component: NoticiaFormComponent }, // Ruta para crear PORFI SI USAN CHATGPT AL MENOS BORREN LOS COMENTARIOS DE LOS CODIGOS QUE LES DA, NO SEAN VAGOS PORFA
  { path: 'noticias/editar/:id', component: NoticiaFormComponent }, // Ruta para editar
  { path: '', redirectTo: 'noticias', pathMatch: 'full' }
];