import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {

  transform(value: any[], searchString: string ) {
    if (!searchString) {
      console.log('no search');
      return value;
    }
    return value.filter(item => {
        const coursesTitle = item.title.toLowerCase().includes(searchString.toLowerCase());

        return (coursesTitle);
    });
 }

}
