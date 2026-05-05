import { Component } from '@angular/core';
import { Subject, Degree, Semester } from '../../core/models/subject';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-subject-select',
  imports: [KeyValuePipe],
  templateUrl: './subject-select.html',
  styleUrl: './subject-select.css',
})
export class SubjectSelect {
  years: Record<number, string> = {
    1: 'Primer',
    2: 'Segundo',
    3: 'Tercer',
    4: 'Cuarto',
  };

  mockSubjects: Subject[] = [
    {
      degree: Degree.Informatica,
      name: 'Asignatura 1',
      year: 1,
      semester: Semester.First,
      area: '',
    },
    {
      degree: Degree.Informatica,
      name: 'Asignatura 2',
      year: 1,
      semester: Semester.First,
      area: '',
    },

    {
      degree: Degree.Informatica,
      name: '....',
      year: 1,
      semester: Semester.First,
      area: '',
    },
  ];

  protected getSubjects(degree: Degree, year: number): Subject[] {
    // TODO
    return this.mockSubjects;
  }

  protected readonly Degree = Degree;
}
