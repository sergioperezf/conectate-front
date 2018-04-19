import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToDetail(id: number) {
    browser.get('/tool/' + id + '/detail');
    return element(by.css('.row h4')).getText();

  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getMenu() {
    return element(by.css('.mat-icon-button')).click()
  }

  getOptions() {
    return element.all(by.css('app-root a')).getText();
  }

  enterValidKeyWords(search: string) {
    element(by.tagName('input')).sendKeys(search);
    browser.sleep(2000);
    element(by.buttonText('Buscar')).click();
    browser.sleep(2000);

  }

  getSearch() {
    //return element(by.tagName('input')).getText();
    return element(by.css('app-root h1')).getText();
  }

  navigateToAddToolPage() {
    element(by.linkText('Agregar herramienta')).click();
    browser.sleep(2000);
    return element(by.css('app-root h2')).getText();
  }

  navigateBackToHome() {
    element(by.linkText('Inicio')).click();
    browser.sleep(2000);
    return element(by.css('app-root h1')).getText();
  }

  navigateToAddExamplePage() {
    element(by.css('.fab.fa-searchengin')).click();
    browser.sleep(2000);
    return element(by.css('.col-md-12 h1')).getText();
  }

  editToolDraft(ToolName: string, Desc: string, Restrict: string, Lic:string, Ver:number, URL:string) {
    element(by.id('txtNombre')).sendKeys(ToolName);
    browser.sleep(2000);
    element(by.id('mat-input-2')).sendKeys(Desc);
    browser.sleep(2000);
    element(by.id('mat-input-3')).sendKeys(Restrict);
    browser.sleep(2000);
    element(by.id('txtLicense')).sendKeys(Lic);
    browser.sleep(2000);
    element(by.id('txtVersion')).sendKeys(Ver);
    browser.sleep(2000);
    element(by.css('.mat-select-arrow')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Borrador")]')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Sistema Operativo")]')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Windows")]')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Mac OS")]')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Linux")]')).click();
    browser.sleep(2000);
    element(by.css('.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing')).click();
    browser.sleep(2000);
    element(by.id('txtUrl')).click();
    browser.sleep(2000);
    element(by.id('txtUrl')).sendKeys(URL);
    browser.sleep(2000);
    element(by.css('.mat-raised-button.mat-primary')).click();
    browser.sleep(2000);
    return element(by.css('app-root h2')).getText();
  }

}
