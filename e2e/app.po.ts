import { browser, by, element } from 'protractor';
import { last } from 'rxjs/operator/last';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToDetail(id: number) {
    browser.get('/tool/' + id + '/detail');
    return element(by.css('.row h4')).getText();

  }

  navigateToDetailName() {
    browser.sleep(2000);
    element(by.linkText('Eclipse')).click();
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
    return element(by.css('.col-md-12 h1')).getText();
  }

  editToolDraftInputs() {
    element(by.id('txtNombre')).sendKeys('ToolName');
    element(by.id('mat-input-2')).sendKeys('Desc');
    element(by.id('mat-input-3')).sendKeys('Restrict');
    element(by.id('txtLicense')).sendKeys('Lic');
    element(by.id('txtVersion')).sendKeys('Ver');
    element(by.id('txtUrl')).sendKeys('https://www.youtube.com/watch?v=DzXlZPsOiOk');
  }

  selectToolDraftOptions() {
    element(by.id('state')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Borrador")]')).click();
    browser.sleep(2000);
    element(by.id('SO')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Windows")]')).click();
    browser.sleep(2000);
      element(by.css('.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing')).click();
   }

  saveToolDraft(){
    browser.sleep(2000);
    element(by.css('.mat-raised-button.mat-primary')).click(); 
    return element(by.css('app-root h2')).getText();
  }

  cancelToolDraft(){

    element(by.buttonText('Cancelar')).click();
    browser.sleep(2000);
    
  }

  editExampleDraftInputs() {
    element(by.id('Add')).click();
    element(by.id('name')).sendKeys('Ejemplo1');
    element(by.id('mat-input-2')).sendKeys('Desc');
    element(by.id('mat-input-3')).sendKeys('Leer capitulo 2');
    browser.sleep(2000);
    element(by.id('nombre')).sendKeys('Manifiesto Agil');
    element(by.id('Enlace')).sendKeys('http://www.agilemanifesto.org');
    browser.sleep(2000);
    
  }

  editExampleDraftResource(){
    element(by.xpath('//span[contains(text(), "Agregar recurso")]')).click();
    let secondName= element.all(by.id('nombre')).last();
    secondName.sendKeys('Libro');
    browser.sleep(2000);
    let secondUrl= element.all(by.id('Enlace')).last();
    secondUrl.sendKeys('otro');
    element(by.xpath('//span[contains(text(), "Agregar recurso")]')).click();
    let lasDelete=element.all(by.css('.fas.fa-trash')).last();
    lasDelete.click();
  }

  selectExampleDraftOptions() {
    element(by.name('discipline')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Ciencias Exactas")]')).click();
    element(by.name('pedagogicStrategy')).click();
    element(by.xpath('//span[contains(text(), "Blended")]')).click();
    browser.sleep(2000);
   }

  saveExampleDraft(){
   element(by.id('Guardar')).click();
       
  }

   cancelExampleDraft(){
    element(by.buttonText('Cancelar')).click();
    
  }

}
