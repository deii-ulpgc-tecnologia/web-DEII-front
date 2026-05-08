import { Component, Input, signal } from '@angular/core';
import { Degree, ordinals, Subject } from '../../../core/models/subject';
import { SubjectList } from '../subject-list/subject-list';

@Component({
  selector: 'app-semester-accordion',
  imports: [SubjectList],
  templateUrl: './semester-accordion.html',
  styleUrl: './semester-accordion.css',
})
export class SemesterAccordion {
  @Input() degree?: Degree;
  @Input() year?: number;
  subjects = signal<Subject[]>([
    {
      name: 'Métodos de Negros',
      degree: Degree.Informatica,
      year: 2,
      semester: 2,
      area: '',
    },
    {
      name: 'Métodos de Negros 2',
      degree: Degree.Informatica,
      year: 2,
      semester: 2,
      area: '',
    },
    {
      name: 'Métodos de Negros 3',
      degree: Degree.Informatica,
      year: 2,
      semester: 2,
      area: '',
    },
  ]);
  protected readonly ordinals = ordinals;
}
