import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: Array<any>, searchPattern: string): any {
    let result = "";
    if (searchPattern) {
      return list.filter(item => {
        const name = item.name.toLowerCase().includes(searchPattern.toLowerCase());
        const severity = item.country_check_severity.toLowerCase().includes(searchPattern.toLowerCase());
        return (name + severity);
      })
    }
    return list;
  }
}
