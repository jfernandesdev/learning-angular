import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  remove(courses: Course[], course: Course) {
   return courses.filter(item => course.title !== item.title);
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
