import { ListOfCourses } from '../models/listOfCourses.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelFilter'
})
export class LevelFilterPipe implements PipeTransform {
  transform(courses: ListOfCourses[], selectedLevel: string): ListOfCourses[] {
    if (!courses || !selectedLevel) {
      return courses;
    }

    return courses.filter(course => course.level.toLowerCase().includes(selectedLevel.toLowerCase()));
  }
}
