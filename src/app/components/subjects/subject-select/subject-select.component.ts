import { Component, signal } from '@angular/core';
import { Subject, Degree } from '../../../core/models/subject';
import { YearAccordion } from '../year-accordion/year-accordion.component';

@Component({
  selector: 'app-subject-select',
  imports: [YearAccordion],
  templateUrl: './subject-select.component.html',
  styleUrl: './subject-select.component.css',
})
export class SubjectSelectComponent {
  protected readonly Degree = Degree;
}
