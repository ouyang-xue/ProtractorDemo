import { browser, by, element } from 'protractor';

export class LoginPage {
  async navigateTo() {
    // 进入到需要测试的页面,browser.baseUrl的取值是在protractor.conf.js中配置的baseUrl
    await browser.get(`${browser.baseUrl}login`);

    // 等待页面中该元素出现再执行其他操作
    await browser.wait(async () => {
      return browser.isElementPresent(by.css('[data-input-password]'));
    }, 1000);
  }

  getTitleText() {
    expect(element(by.css('[class="welcome"]')).getText()).toEqual('Welcome to users management');
  }

  async enterUserInfo() {
    try {
      const username = await element(by.css('[data-input-username]'));
      username.clear();
      username.sendKeys('admin');
      const password = await element(by.css('[data-input-password]'));
      password.clear();
      password.sendKeys('123456');
    } catch (e) {
      Promise.reject('Error');
    }

  }

  async login() {
    // 执行完点击事件之后，在then中处理后续操作
    await element(by.css('[data-btn-login]')).click().then(async (loginInfo: any) => {
      expect(await browser.getCurrentUrl()).toBe(`${browser.baseUrl}test`);
    }, (errorData: any) => {
      console.log(errorData);
    });
  }

}
