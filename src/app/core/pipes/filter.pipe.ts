import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], fieldNames: any[], searchItem: any): any[] {
    if (!items) { return []; }
    if (typeof searchItem === 'string') {
      searchItem = searchItem.toLowerCase();
    }
    return items.filter(it => {
      const val: any[] = [];
      const numbers: any[] = [];
      fieldNames.forEach((field) => {
          let fieldVal = it[field.toString()];
          if (fieldVal && typeof searchItem === 'string') {
            fieldVal = fieldVal.toLowerCase();
            val.push(fieldVal);
          } else if (!isNaN(searchItem)) {
            numbers.push(fieldVal);
          }
      });
      // Usee here == equal because it generic logic to test all type of data
      return searchItem  ? val && val.length > 0 ?
                (val.find(x => x ? x.includes(searchItem) : null)) : numbers.find(num => num === searchItem) : true;
    });
  }
}

@Pipe({
  name: 'SearchFilterPipe',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        if (el && typeof el !== 'number') {
          return el.toLowerCase().indexOf(input) > -1;
        } else {
          return el.toString().indexOf(input) > -1;
        }
      });
    }
    return value;
  }
}
