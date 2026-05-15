import { Component, Input, signal } from '@angular/core';
import { Subject } from '../../../core/models/subject';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  imports: [RouterLink],
  templateUrl: './subject-list.html',
  styleUrl: './subject-list.css',
})
export class SubjectList {
  @Input() subjects: Subject[] = [];
}
