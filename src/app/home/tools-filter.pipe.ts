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
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return toolsObject.filter(item => item.name.indexOf(filter) !== -1);
  }

}
