import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
