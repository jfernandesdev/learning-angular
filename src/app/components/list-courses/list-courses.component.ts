import { Component } from '@angular/core';

import { Course } from 'src/app/interfaces/Course';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent {
  courses: Course[] = [
    { title: 'Angular', description: 'Eu sou apenas uma descrição', price: 1200, availability: true },
    { title: 'React', description: 'Eu sou outra descrição', price: 1000, availability: true },
    { title: 'Typescript', description: 'Eu também sou uma descrição', price: 500, availability: true },
    { title: 'Metodologias Ágeis', description: 'Eu também sou outra uma descrição', price: 800, availability: false },
  ]

  constructor(private listService: ListService) {}

  removeCourse(course: Course) {
    this.courses = this.listService.remove(this.courses, course);
  }
}
