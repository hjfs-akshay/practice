import { CourseService } from './../ccourse.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit 
{
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService,
    private router: Router) 
    {

    }

  ngOnInit(): void 
  {
    this.reloadData();
  }

  reloadData() {
    this.courses = this.courseService.getCoursesList();
  }
}
