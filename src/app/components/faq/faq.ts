import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isHidden: boolean;
}

interface FaqCategory {
  id: number;
  title: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {
  isDelegate: boolean = false;

  searchTerm: string = '';

  expandedCategories: Set<number> = new Set<number>();
  expandedQuestions: Set<number> = new Set<number>();

  // QUITAR CUANDO SE HAGA LA IMPLEMENTACIÓN CON LA BASE DE DATOS
  categories: FaqCategory[] = [
    {
      id: 1,
      title: 'Matrícula y Administración',
      items: [
        { id: 101, question: '¿Cómo me matriculo?', answer: 'Debes acceder al portal MiULPGC...', isHidden: false },
        { id: 102, question: '¿Plazos de becas?', answer: 'El plazo finaliza el 30 de Octubre.', isHidden: true }
      ]
    },
    {
      id: 2,
      title: 'Campus Virtual y Correo',
      items: [
        { id: 201, question: '¿Cómo recupero mi contraseña?', answer: 'Ve a la página de gestión de credenciales...', isHidden: false }
      ]
    },
    {
      id: 3,
      title: 'Instalaciones y Biblioteca',
      items: [
        { id: 301, question: '¿Horario de la biblioteca?', answer: 'De 8:00 a 20:00 de lunes a viernes.', isHidden: false }
      ]
    }
  ];

  // QUITAR CUANDO SE HAGA LA AUTENTICACIÓN REAL
  toggleDelegate() {
    this.isDelegate = !this.isDelegate;
  }

  get filteredCategories(): FaqCategory[] {
    const term = this.searchTerm.toLowerCase().trim();

    return this.categories.map(cat => {
      const filteredItems = cat.items.filter(item => {
        if (!this.isDelegate && item.isHidden) {
          return false;
        }
        if (term) {
          return item.question.toLowerCase().includes(term) || 
                 item.answer.toLowerCase().includes(term);
        }
        return true;
      });

      return { ...cat, items: filteredItems };
    }).filter(cat => cat.items.length > 0);
  }

  toggleCategory(id: number) {
    if (this.expandedCategories.has(id)) {
      this.expandedCategories.delete(id);
    } else {
      this.expandedCategories.add(id);
    }
  }

  toggleQuestion(id: number) {
    if (this.expandedQuestions.has(id)) {
      this.expandedQuestions.delete(id);
    } else {
      this.expandedQuestions.add(id);
    }
  }

  editQuestion(item: FaqItem, event: Event) {
    event.stopPropagation();
    alert(`Editando pregunta: ${item.question}`);
  }

  toggleVisibility(item: FaqItem, event: Event) {
    event.stopPropagation();
    item.isHidden = !item.isHidden;
  }

  deleteQuestion(categoryId: number, itemId: number, event: Event) {
    event.stopPropagation();
    if(confirm('¿Seguro que deseas eliminar esta pregunta?')) {
      const category = this.categories.find(c => c.id === categoryId);
      if (category) {
        category.items = category.items.filter(i => i.id !== itemId);
      }
    }
  }
}