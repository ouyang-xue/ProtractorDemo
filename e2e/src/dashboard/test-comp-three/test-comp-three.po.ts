import {$$, browser, by, element} from 'protractor';

export class TestThreePage {

  async getCurrentUrl() {
    await expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}test3`);
  }

  async gotoComp4() {
    await browser.wait(() => {
      return browser.isElementPresent(by.css('[data-btn-to-comp4]'));
    }, 1000);

    await element(by.css('[data-btn-to-comp4]')).click().then(async () => {
      expect(await browser.getCurrentUrl()).toBe(`${browser.baseUrl}test4`);
    }, (errorData: any) => {
      console.log(errorData);
    });
  }
}
