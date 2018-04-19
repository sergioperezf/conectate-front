import { AppPage } from './app.po';
import { browser, ProtractorExpectedConditions } from 'protractor';

describe('conectate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('should display Conectate Page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Conectate');
  });

  it('should display Menu Options', () => {
    page.navigateTo();
    page.getMenu();
    expect(page.getOptions()).toEqual(['Inicio', 'Agregar herramienta']);
  });

  it('should Make Valid Search', () => {
    var EC=ProtractorExpectedConditions;
    page.navigateTo();
    page.enterValidKeyWords('Moodle');
    expect(page.getSearch()).toEqual('Conectate');
  });

  it('should navigate to add tool page', () => {
    page.navigateTo();
    page.getMenu();
    expect(page.navigateToAddToolPage()).toEqual('Agregar herramienta');
  });

  it('should navigate to add example page', () => {
    page.navigateTo();
    expect(page.navigateToAddExamplePage()).toEqual('Herramienta x');
  });

  it('should navigate to tool detail', () => {
    page.navigateToDetail(1);
    expect(page.navigateToDetail(1)).toEqual('Moodlle');
  });*/

  it('should edit tool draft', () => {
    page.navigateTo();
    page.getMenu();
    page.navigateToAddToolPage();
    page.editToolDraft('Tool1','Description','Empty','Licencia', 1, 'https://www.youtube.com/watch?v=DzXlZPsOiOk');
    expect(page.navigateToAddToolPage()).toEqual('Agregar herramienta');
  });

});
