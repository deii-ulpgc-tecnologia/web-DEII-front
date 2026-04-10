import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../core/services/noticias';

@Component({
  selector: 'app-noticia-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './noticia-form.html',
  styleUrl: './noticia-form.css'
})
export class NoticiaFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private noticiasService = inject(NoticiasService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Nuestro formulario con sus validaciones
  formularioNoticia: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    cuerpo: ['', [Validators.required]],
    imagenPortada: [''], // Guardará la URL en base64 de la imagen seleccionada
    imagenesExtra: ['']  // Para la subida de imágenes secundarias
  });

  // Estados para saber si se está creando o editando
  isEditando = signal(false);
  idEdicion = signal<number | null>(null);

  ngOnInit() {
    // Se comprueba si en la URL nos pasaron un ID (modo edición)
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      const noticiaExistente = this.noticiasService.getNoticiaPorId(id);
      
      if (noticiaExistente) {
        this.isEditando.set(true);
        this.idEdicion.set(id);
        // Rellena el formulario con los datos que ya existían
        this.formularioNoticia.patchValue({
          titulo: noticiaExistente.title,
          cuerpo: noticiaExistente.description,
          imagenPortada: noticiaExistente.imageUrl
        });
      }
    }
  }

  // --- LÓGICA PARA LEER LAS IMÁGENES DEL ORDENADOR ---
  procesarArchivo(event: any, campoDestino: 'imagenPortada' | 'imagenesExtra') {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      // Cuando termine de leer el archivo, lo guarda en el formulario para previsualizarlo
      reader.onload = () => {
        this.formularioNoticia.patchValue({
          [campoDestino]: reader.result as string
        });
      };
      reader.readAsDataURL(archivo);
    }
  }

  // --- LÓGICA PARA GUARDAR ---
  guardarNoticia() {
    if (this.formularioNoticia.invalid) {
      this.formularioNoticia.markAllAsTouched(); // Muestra los errores en rojo si falta algo
      return;
    }

    const datos = this.formularioNoticia.value;
    
    // Formateamos la fecha actual al estilo "DD de mes YYYY"
    const opcionesFecha: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaHoy = new Date().toLocaleDateString('es-ES', opcionesFecha);

    const noticiaProcesada = {
      title: datos.titulo,
      description: datos.cuerpo,
      date: fechaHoy,
      // Si no subió imagen, poner un placeholder por defecto
      imageUrl: datos.imagenPortada || 'https://via.placeholder.com/800x400/d9d9d9/545859?text=Sin+Imagen'
    };

    if (this.isEditando() && this.idEdicion() !== null) {
      // Actualizar pasando también el pinned actual para no perderlo
      const pinnedActual = this.noticiasService.getNoticiaPorId(this.idEdicion()!)?.pinned || false;
      this.noticiasService.updateNoticia({
        id: this.idEdicion()!,
        ...noticiaProcesada,
        pinned: pinnedActual
      });
    } else {
      // Crea una nueva noticia (si no es edición)
      this.noticiasService.addNoticia(noticiaProcesada);
    }

    // Vuelta a la página principal de noticias después de guardar
    this.router.navigate(['/noticias']);
  }

  cancelar() {
    this.router.navigate(['/noticias']);
  }
}