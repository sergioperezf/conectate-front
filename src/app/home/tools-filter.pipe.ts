import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toolsFilter',
  pure:false
})
export class ToolsFilterPipe implements PipeTransform {

  transform(toolsObject: any[], filter: String): any {
    if (!toolsObject || !filter) {
      return toolsObject;
    }
    let filterByName = toolsObject.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    let filterByKeyWords = toolsObject.filter(item => item.keyWords.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    return filterByName.concat(filterByKeyWords);
  }

}
