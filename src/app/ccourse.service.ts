import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CourseService
{
    private url = 'http://localhost:9090/api/employees';

    constructor(private http : HttpClient)
    {

    }

    getCourse(id : number): Observable<any>
    {
        return this.http.get(`${this.url}/${id}`);
    }

    createCourse(course : Object): Observable<Object>
    {
        return this.http.post(`${this.url}`, course);
    }

    getCoursesList(): Observable<any>
    {
        return this.http.get(`${this.url}`);
    }
}