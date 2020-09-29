import {browser, by, element, logging} from 'protractor';
import {LoginPage} from './login.po';

describe('Login', () => {
  let loginPage: LoginPage;

  beforeAll(() => {
    loginPage = new LoginPage();
  });

  it('Should display login window', async () => {
    await loginPage.navigateTo();
    await loginPage.getTitleText();
  });

  it('Enter username and password', async () => {
    await loginPage.enterUserInfo();
  });

  it('Login', async () => {
    await loginPage.login();
  });

  afterEach(async () => {
    browser.sleep(1000);
  });
});
