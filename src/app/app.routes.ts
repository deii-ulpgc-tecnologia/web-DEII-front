import { Routes } from '@angular/router';
import { Noticias } from './components/noticias/noticias';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form';
import { Docs } from './components/docs/docs';

import { SubjectSelectComponent } from './components/subjects/subject-select/subject-select.component';
import { Asignatures } from './components/asignatures/asignatures';
import { DocsReviewComponent } from './components/docs-review/docs-review';
import { DocumentoForm } from './components/documento-form/documento-form';
import { FaqComponent } from './components/faq/faq';
import { AboutUs } from './components/about-us/about-us';
import { Acknowledgments } from './components/acknowledgments/acknowledgments';

export const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'noticias', component: Noticias },
  { path: 'asignatura', component: Asignatures },
  // { path: '', redirectTo: 'agradecimientos', pathMatch: 'full' },
  { path: 'noticias/crear', component: NoticiaFormComponent },
  { path: 'noticias/editar/:id', component: NoticiaFormComponent },
  { path: 'docs', component: Docs },
  { path: 'about-us', component: AboutUs },
  { path: 'asignaturas', component: SubjectSelectComponent },
  { path: 'docs-review', component: DocsReviewComponent },
  { path: 'documentos/editar/:id', component: DocumentoForm},
  { path: 'faq', component: FaqComponent },
  { path: 'agradecimientos', component: Acknowledgments }
];
