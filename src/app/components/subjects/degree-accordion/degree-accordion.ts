import { Component, Input } from '@angular/core';
import { Degree } from '../../../core/models/subject';

@Component({
  selector: 'app-degree-accordion',
  imports: [],
  templateUrl: './degree-accordion.html',
  styleUrl: './degree-accordion.css',
})
export class DegreeAccordion {
  @Input() degree?: Degree;
  ordinals: Record<number, string> = {
    1: 'Primer',
    2: 'Segundo',
    3: 'Tercer',
    4: 'Cuarto',
  };
}
