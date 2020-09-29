import {TestThreePage} from './test-comp-three.po';
import {browser} from 'protractor';

describe('Comp3 Page:', () => {

  let test3Page: TestThreePage;

  beforeAll(() => {
    test3Page = new TestThreePage();
  });

  it('Get Url', async () => {
    await test3Page.getCurrentUrl();
  });

  it('To Comp4', async () => {
    await test3Page.gotoComp4();
  });

  afterEach(async () => {
    browser.sleep(1000);
  });

});
