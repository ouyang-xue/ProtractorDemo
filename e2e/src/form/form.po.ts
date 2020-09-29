import {browser, by, element} from 'protractor';

export class FormPage {

  // getCurrentUrl() {
  //   browser.get('http://localhost:4200/form');
  // }

  openDialog() {
    // data-h2-test-form
    element(by.css('[data-btn-open-dialog]')).click();
    //   .then( () => {
    //   expect(browser.isElementPresent(by.css('[data-h4-dialog-title]'))).toBe(true);
    // });
  }

  // inputValues() {
  //   browser.wait( () => {
  //     return browser.isElementPresent(by.css('[data-h4-dialog-title]'));
  //   }, 1000);
  //
  //   for (let i = 0; i < 10; i++) {
  //     element(by.css('[data-input-example]')).sendKeys('value==' + i);
  //   }
  // }
  //
  // apply() {
  //   element(by.css('[data-btn-apply]')).click().then( () => {
  //     expect(browser.isElementPresent(by.css('[data-h4-dialog-title]'))).toBe(false);
  //   });
  // }
  //
  // cancel() {
  //   element(by.css('[data-btn-cancel]')).click().then( () => {
  //     expect(browser.isElementPresent(by.css('[data-h4-dialog-title]'))).toBe(false);
  //   });
  // }
}
