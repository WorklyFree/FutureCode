import { Component, Input } from '@angular/core';
import { ICourse } from '../app.component.models';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

  // envoyé depuis le parent (app) vers le child (course-card) 
  @Input({required: true}) course: ICourse = {} as ICourse; // 'required' pour obliger l'attribut course] lors de l'appel de app-course-card
}
