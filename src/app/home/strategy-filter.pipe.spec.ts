import { StrategyFilterPipe } from './strategy-filter.pipe';

describe('StrategyFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new StrategyFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('test off strategic filters', () => {
    const pipe = new StrategyFilterPipe();
    let toolsObject = [
      {
        'id':1,
        'name':'Moodle',
        'keyWords':'Platafora web',
        'pedagogicStrategy':'Online',
        'description':'Aprendizaje virual'
      },
      {
        'id':2,
        'name':'Sicua',
        'keyWords':'Platafora web sicua',
        'pedagogicStrategy':'Foros',
        'description':'Foros viruales'
      }
    ];
    expect(pipe.transform(toolsObject,"Foros")).toEqual([toolsObject[1]]);
  });
});

