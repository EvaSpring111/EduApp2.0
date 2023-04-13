
import { ListOfCourses } from '../models/listOfCourses.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(courses: ListOfCourses[], selectedCategory: string): ListOfCourses[] {
    if (!courses || !selectedCategory) {
      return courses;
    }

    return courses.filter(course => course.categories.toLowerCase().includes(selectedCategory.toLowerCase()));
  }
}
