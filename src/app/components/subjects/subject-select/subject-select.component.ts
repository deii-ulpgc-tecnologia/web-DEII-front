import { Component } from '@angular/core';
import { Subject, Degree } from '../../../core/models/subject';
import { DegreeAccordion } from '../degree-accordion/degree-accordion';

@Component({
  selector: 'app-subject-select',
  imports: [DegreeAccordion],
  templateUrl: './subject-select.component.html',
  styleUrl: './subject-select.component.css',
})
export class SubjectSelectComponent {
  subjects: Subject[] = [];

  protected getSubjects(degree: Degree, year: number): Subject[] {
    // TODO
    return this.subjects;
  }

  protected readonly Degree = Degree;
}
