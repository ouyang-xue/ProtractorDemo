/*
•Suites
Suites可以理解为一组测试，使用全局的Jasmin函数describe 创建。describe 函数接受两个参数，一个字符串和一个函数。字符串是这个Suites的名字或标题（通常描述下测试内容），函数是实现Suites的代码块。

•Specs
Specs可以理解为一个测试，使用全局的Jasmin函数it 创建。和describe 一样接受两个参数，一个字符串和一个函数，函数就是要执行的测试，字符串就是测试的名字。一个Spec可以包含多个expectations来测试代码。在Jasmine中，一个expectations就是一个断言，只能是true 或false 。只有全部expectations是true 的时候spec才会通过。

由于describe 和it 块实质上都函数，所有他可以包含任何的可执行代码。javascript的作用域规则也是适用的，所以describe 内定义的变量，其内部所有的it 都能访问到。

•Expectations
expectations由expect 函数创建。接受一个参数。和Matcher一起联用，设置测试的预期值。

在Jasmine中，每个Matcher实现一个“期望值”和“实际值”的布尔判断，Jasmine会根据Mather判断expectation是true 还是false ，然后决定spec是测试通过还是失败。所有Matcher可以通过not 执行否定判断。


beforeEach(function) //在每一个测试用例(it)执行之前都执行一遍beforeEach函数；
afterEach(function) //在每一个测试用例(it)执行完成之后都执行一遍afterEach函数；
beforeAll(function) //在所有测试用例执行之前执行一遍beforeAll函数；
afterAll(function) //在所有测试用例执行完成之后执行一遍afterAll函数；
*/

// The `describe` and `it` syntax is from the Jasmine framework.
// `browser` is a global created by Protractor, which is used for browser-level commands such as navigation with `browser.get`.



// import {browser, by, element} from 'protractor';

import {browser, by, element, protractor} from 'protractor';

describe('Protractor Demo: ',  () => {

  // beforeEach 表示下面的每个测试用例都会走一遍beforeEach里面的代码
  beforeEach(() => {
    browser.sleep(500);
  })

  it('登入界面',  () => {
    // browser.get('http://www.baidu.com');
    // browser.get('http://localhost:4200');
    browser.get(browser.baseUrl);
  });

  it('开始测试', () => {
    browser.wait( () => { // 等待这个网页出现了css="subtractBtn"这个选择器，再执行其他的操作
      // 可以通过元素类型来获取
      return browser.isElementPresent(by.css('button.subtractBtn-class')); // 直到这个选择器的元素存在的时候
    }, 1000);

    // element和by 是protractor提供的全局函数

    // element(by.css('[class="subtractBtn-class"]')).click(); // 根据元素属性定位元素
    element(by.css('[id="addBtn-id"]')).click();
    // element(by.css('[data-subtract-btn="subtract"]')).click();

    // 通过id选择器获取元素
    // element(by.id('addBtn-id')).click().then((aaa) => {
    //
    // });

    // element(by.buttonText('Add')).click(); // 通过按钮文字获取元素
    element(by.tagName('h3')).getText().then((text) => {
      expect(text).toEqual('我是H3');
    });

    // element(by.xpath('//div/ul/li/a')).getText().then((a) => {
    //   expect(a).toEqual('链接');
    // });

    // element(by.model('username')).sendKeys('Admin'); // 向该元素输入Admin // 报驱动异常
    // element(by.css('[class="navigate"]')).sendKeys(protractor.Key.ENTER); // 向查找的元素输入回车键
    // console.log(element.all(by.tagName('button')).count()); // 输出标签为button的数量
    // element.all(by.tagName('button')).count().then((count) => {
    //   expect(count).toEqual('2');
    // })

    // 所有的方法返回的是一个promise, 所以比如你想输出一个元素的值，应该这么写：
    // element(by.css('button.subtractBtn-class')).getText().then((text) => {
    //   console.log(text);
    //   expect(text).toEqual('Subtract');
    // });
    // 如果使用expect方法来验证元素的值时，expect方法会帮你取出promise中值，所以只用这么写:
    const textValue = element(by.css('input.textField')).getAttribute('value');
    expect(textValue).toEqual('111');

  });

  it('test', () => {
    element(by.xpath('//div/ul/li/a')).getText().then((a) => {
      expect(a).toEqual('链接');
    });
  });
  // afterEach(() => {
  //   browser.sleep(1000);
  // });
});
