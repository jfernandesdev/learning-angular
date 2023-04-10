import { Component } from '@angular/core';

import { Course } from 'src/app/interfaces/Course';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent {
  courses: Course[] = []

  constructor(private listService: ListService) {
    this.getCourses();
  }

  removeCourse(course: Course) {
    this.courses = this.listService.remove(this.courses, course);
  }

  getCourses(): void {
    this.listService.getAll().subscribe((courses) => (this.courses = courses));
  }
}
