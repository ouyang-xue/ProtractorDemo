import { TestTwoPage} from './test-comp-two.po';
import {browser} from 'protractor';

describe('Comp2 Page:', () => {

  let test2Page: TestTwoPage;

  beforeAll(() => {
    test2Page = new TestTwoPage();
    // browser.sleep(10000);
  });

  it('Get Url', async () => {
    await test2Page.getCurrentUrl();
  });

  it('Add Count', async () => {
    await test2Page.addCount();
  });

  it('Get List Count', async () => {
    await test2Page.getListCount();
  });

  it('Checkbox', async () => {
    await test2Page.clickCheckbox();
  });

  it('Selector', async () => {
    await test2Page.selector();
  });

  it('To Comp3', async () => {
    await test2Page.gotoComp3();
  });

  afterEach(async () => {
    browser.sleep(1000);
  });

});
