import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocumentosService } from '../../core/services/documentos';

@Component({
  selector: 'app-documentos',
  imports: [RouterLink],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css'
})
export class Documentos {

  private documentosService = inject(DocumentosService);

  documentos = this.documentosService.documentos;

}