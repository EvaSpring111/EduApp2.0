import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../services/http-service.service';
import { ListOfCourses } from '../models/listOfCourses.interface';

import { SearchFilter } from '../pipe/searchFilter.pipe';
import { CategoryFilterPipe } from '../pipe/topicFilter.pipe';
import { LevelFilterPipe } from '../pipe/levelsFilter.pipe';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css'],
  providers: [SearchFilter, CategoryFilterPipe, LevelFilterPipe]
})
export class ListOfCoursesComponent implements OnInit {

  listOgCourses: ListOfCourses[] = [];
  productsPerPage: number = 4;
  length: number | undefined;
  totalLength: any;
  page: number = 1;
  searchvalue: string = "";
  selectedCategory: string = '';
  selectLevel: string = '';

  constructor( private http: HttpServiceService){}

  ngOnInit(): void{
    this.getCourses();
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  getCourses(){
    this.http.getListOfCourses()
      .subscribe((courses: ListOfCourses[]) => {
        this.listOgCourses = courses;
        this.totalLength = courses.length;
  })

}

windowScrolled = false;

scrollToTop(): void {
  window.scrollTo(0, 0);
}

topics: string[] = [ 'Music', "Design", "Engineer", "Psychology", "Finance", "Coding", "Business"];
levels: string[] = ['Beginner', 'Intermediate', 'Advanced'];

}
