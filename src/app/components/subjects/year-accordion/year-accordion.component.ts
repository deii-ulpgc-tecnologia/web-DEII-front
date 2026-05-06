import { Component, Input } from '@angular/core';
import { Degree, ordinals } from '../../../core/models/subject';
import { SemesterAccordion } from '../semester-accordion/semester-accordion';

@Component({
  selector: 'app-year-accordion',
  imports: [SemesterAccordion],
  templateUrl: './year-accordion.component.html',
  styleUrl: './year-accordion.component.css',
})
export class YearAccordion {
  @Input() degree?: Degree;
  protected readonly ordinals = ordinals;
}
