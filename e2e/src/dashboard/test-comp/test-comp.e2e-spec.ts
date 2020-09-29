import {browser, by, element, logging} from 'protractor';
import { TestCompPage} from './test-comp.po';

describe('Test All', () => {
  let testPage: TestCompPage;

  beforeAll(() => {
    testPage = new TestCompPage();
  });

  describe('Comp1 Page', () => {
    it('Enter Url', async () => {
      await testPage.getCurrentUrl();
    });

    it('Open Dialog', async () => {
      await testPage.openDialog();
    });

    it('Input Values in Form', async () => {
      await testPage.inputValues();
    });

    it('Apply', async () => {
      await testPage.apply();
    });

    it('To Comp2', async () => {
      await testPage.gotoComp2();
    });

    afterEach(async () => {
      browser.sleep(2000);
    });
  });
});
