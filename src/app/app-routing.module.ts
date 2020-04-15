import { CreateCourseComponent } from './create-course/create-course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = 
[
    { path : '', redirectTo : 'course',  pathMatch: 'full' },
    { path : 'courses', component :CourseListComponent},
    { path : 'add' , component : CreateCourseComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
  