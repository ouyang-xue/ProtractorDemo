import {$$, browser, by, element} from 'protractor';

export class TestTwoPage {

  async getCurrentUrl() {
    expect(await browser.getCurrentUrl()).toBe(`${browser.baseUrl}test2`);
  }

  async addCount() {
    for (let i = 0; i < 10; i++) {
      await element(by.css('[data-btn-add]')).click();
    }
    const value = await element(by.css('[data-input-user-count]')).getAttribute('value');
    expect(value).toEqual('20');
  }

  async clickCheckbox() {
    // element(by.xpath('//form/div/ul/li/button')).click();
    await element(by.css('[data-checkbox]')).click().then(async () => {
      const isSelected = await element(by.css('[data-checkbox]')).isSelected();
      expect(await isSelected).toBe(true);
    });
  }

  async selector() {
    const selected = element.all(by.options('data-select-number')).get(2);
    expect(selected.getText()).toEqual('three');
  }

  async gotoComp3() {
    await element(by.css('[data-btn-to-comp3]')).click().then(async () => {
      expect(await browser.getCurrentUrl()).toBe(`${browser.baseUrl}test3`);
    }, (errorData: any) => {
      console.log(errorData);
    });
  }

  async getListCount() {
    // 以下是用不同方式获取元素
    const liCount = element.all(by.css('[data-li]')).count();
    expect(await liCount).toEqual(3);

    const liCount2 = $$('.ul-class li');
    expect(await liCount2.count()).toEqual(3);
  }

  // async navigateBack() {
  //   await browser.navigate().back();
  //   expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/test');
  // }


}
