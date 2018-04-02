import { ToolsFilterPipe } from './tools-filter.pipe';

describe('ToolsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ToolsFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('test off strategic filters', () => {
    const pipe = new ToolsFilterPipe();
    let toolsObject = [
      {
        'id':1,
        'name':'Moodle',
        'keyWords':'Platafora web',
        'technicalDetails':'Online',
        'description':'Aprendizaje virual'
      },
      {
        'id':2,
        'name':'Sicua',
        'keyWords':'Platafora web',
        'technicalDetails':'Foros',
        'description':'Foros viruales'
      }
    ];
    expect(pipe.transform(toolsObject,"Sicua")).toEqual([toolsObject[1]]);
  });

});
