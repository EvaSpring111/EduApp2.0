import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ListOfCourses } from '../models/listOfCourses.interface';
import { listOfCourses } from '../bd/bdOfCourses';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor() { }

  getListOfCourses(): Observable<ListOfCourses[]>{
    return of(listOfCourses)
  }
}
