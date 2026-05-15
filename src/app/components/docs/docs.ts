import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  imports: [],
  templateUrl: './docs.html',
  styleUrl: './docs.css',
})

export class Docs {
  //Variables de estado
  selectedGrade: string = "";
  selectedAsignature: string = "";
  emailProv: string = "";
  emailError: boolean = false; //Controla si se muestra el error
  descriptionProv: string = "";

  //Diccionario de asignaturas
  asignatureGrade: { [key:string]: string[] } = {
    "GII": ["Álgebra y Geometría", "Fundamentos de los Computadores", "Programación Orientada a Objetos"],
    "GCID": ["Estadística Básica", "Programación para Datos", "Base de Datos"],
    "GFM": ["Física I", "Matemáticas I", "Mecánica"]
  };

  //Devuelve las asignaturas seleccionadas por grado
  get asignaturesAvaible(): string[] {
    return this.selectedGrade ? this.asignatureGrade[this.selectedGrade] : [];
  }

  //Eventos
  onGradeChange(newGrade: string) {
    this.selectedGrade = newGrade;
    this.selectedAsignature = '';  //Si se cambia el grao se limpia la asignatura anterior
  }

  onAsignatureChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.selectedAsignature = element.value;
  }

  onEmail(event: Event) {
    const element = event.target as HTMLInputElement;
    this.emailProv = element.value;

    if (this.emailProv.length === 0) {
      this.emailError = false;
    } else if (this.emailProv.endsWith('@alu.ulpgc.es')) {
      this.emailError = true;
    }
  }

  onEmailBlur() {
    if (this.emailProv.length > 0 && !this.emailProv.endsWith('@alu.ulpgc.es')) {
      this.emailError = true;
    } else {
      this.emailError = false;
    }
  }

  onDescriptionChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.descriptionProv= element.value;
  }

}
