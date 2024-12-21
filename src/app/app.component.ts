import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { CategoryType, ICourse } from './app.component.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  data = {
    title : 'Angular 17 Course'
  }
  
  readonly courses: Array<ICourse> = [
    {
      id: 1,
      description: 'Angular 17 for Beginners',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: CategoryType.beginners,
      lessonsCount: 70,
      imageUrl: "assets/images/angular.png"
    },
    {
      id: 2,
      description: 'RxJs',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      category: CategoryType.advanced,
      lessonsCount: 40,
      imageUrl: "assets/images/rxjs.png"
    },
    {
      id: 3,
      description: 'NgRx',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: CategoryType.advanced,
      lessonsCount: 48,
      imageUrl: "assets/images/ngrx.jpg"
    }
  ];

  beginnerCourse = this.courses[0];
  rxjsCourse = this.courses[1];
  ngrxCourse = this.courses[2];

}
