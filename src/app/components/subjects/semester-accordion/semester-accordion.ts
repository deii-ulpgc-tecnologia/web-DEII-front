import { Component, Input } from '@angular/core';
import { Degree, ordinals, Subject } from '../../../core/models/subject';

@Component({
  selector: 'app-semester-accordion',
  imports: [],
  templateUrl: './semester-accordion.html',
  styleUrl: './semester-accordion.css',
})
export class SemesterAccordion {
  @Input() degree?: Degree;
  @Input() year?: number;
  @Input() subjects: Subject[] = [];
  protected readonly ordinals = ordinals;
}
