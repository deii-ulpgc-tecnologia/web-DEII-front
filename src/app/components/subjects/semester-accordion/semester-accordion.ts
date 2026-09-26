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
  subjects = signal<Subject[]>([]);
  protected readonly ordinals = ordinals;
}
