import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';
import { SubjectSelectComponent } from './components/subjects/subject-select/subject-select.component';
import { Asignatures } from './components/asignatures/asignatures';
import { DocsReviewComponent } from './components/docs-review/docs-review';
import { DocumentoForm } from './components/documento-form/documento-form';
import { FaqComponent } from './components/faq/faq';
import { AboutUs } from './components/about-us/about-us';

export const routes: Routes = [
  { path: 'noticias', component: Noticias },
  { path: 'asignatura', component: Asignatures },
  { path: 'noticias/crear', component: NoticiaFormComponent }, // Ruta para crear
  { path: 'noticias/editar/:id', component: NoticiaFormComponent }, // Ruta para editar
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'about-us', component: AboutUs },
  { path: 'asignaturas', component: SubjectSelectComponent },
  { path: 'docs-review', component: DocsReviewComponent },
  { path: 'documentos/editar/:id', component: DocumentoForm},
  { path: 'faq', component: FaqComponent }
];
