import { Injectable } from '@angular/core';

import { Course } from '../interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(courses: Course[], course: Course) {
   return courses.filter(item => course.title !== item.title);
  }
}
