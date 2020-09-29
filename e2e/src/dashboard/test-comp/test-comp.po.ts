import {$$, browser, by, element} from 'protractor';

export class TestCompPage {

  async getCurrentUrl() {
    expect(await browser.getCurrentUrl()).toBe(`${browser.baseUrl}test`);
  }

  async openDialog() {
    await element(by.css('[data-btn-open-dialog]')).click();
  }

  async inputValues() {
    await browser.wait(() => {
      return browser.isElementPresent(by.css('[data-h4-dialog-title]'));
    }, 1000);

    // element.all可以用$$替换, $$('[data-input-example]');
    await element.all(by.css('[data-input-example]')).each((async (elementFinder, index) => {
      await elementFinder.sendKeys('value====' + index);
    }));

  }

  async apply() {
    await element(by.css('[data-btn-apply]')).click().then(async () => {
      expect(await browser.isElementPresent(by.css('[data-h4-dialog-title]'))).toBe(false);
    });
  }

  async cancel() {
    await element(by.css('[data-btn-cancel]')).click().then(async () => {
      expect(await browser.isElementPresent(by.css('[data-h4-dialog-title]'))).toBe(false);
    });
  }

  async gotoComp2() {
    await element(by.css('[data-btn-switch-to-comp1]')).click().then(() => {
      expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}test2`);
    });
  }

  // async navigateForword() {
  //   await browser.navigate().forward();
  //   expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/test');
  // }
}
