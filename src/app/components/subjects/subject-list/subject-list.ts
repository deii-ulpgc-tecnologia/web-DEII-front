import { Component, Input } from '@angular/core';
import { Subject } from '../../../core/models/subject';

@Component({
  selector: 'app-subject-list',
  imports: [],
  templateUrl: './subject-list.html',
  styleUrl: './subject-list.css',
})
export class SubjectList {
  @Input() subjects: Subject[] = [];
}
