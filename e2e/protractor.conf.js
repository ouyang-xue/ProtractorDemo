// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;    //控制台报告
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');  //html报告
const suiteConfigFile = require('./suites-file');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  // 设置脚本之间运行的超时时间
  allScriptsTimeout: 11000,

  // 下面两种加载测试文件的方法都可以，我们建议使用第二种，将文件路径单独写在一个文件中
  // specs: [
  //   './src/**/*.e2e-spec.ts',
  // ],

  suites:suiteConfigFile.SUITES,

  capabilities: {
    'browserName': 'chrome',
    'acceptSslCerts': true,
    'ignoreCertificateErrors': true
  },

  /* //同时运行多个浏览器的配置
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }],*/

  // 如果驱动安装不成功或者与浏览器版本不一致，则需要手动下载驱动，将exe文件放在浏览器的安装目录下，在这里引入
  chromeDriver: "C:/Program Files (x86)/Google/Chrome/Application/chromedriver_76.0.3809.100.exe",

  // 该属性为true表示直接连接浏览器，不通过Selenium，只支持Firefox和Chrome
  directConnect: true,

  // 测试入口
  baseUrl: 'http://localhost:4200/',

  /*jasmine提供了以下功能：

    函数it定义了一个测试用例。
    函数it中expect(a).toBe(true) 表示对意思是期望a为true。如果a不等于true，测试用例执行失败。
    函数describe里面可以包含多个it，起到一个对测试用例分组的作用。
    测试脚本执行完毕后，会打出结果，多少测试用例执行成功，多少执行失败以及失败的原因。*/
  framework: 'jasmine',

  // 使用async/await时，需要设置该项为false
  SELENIUM_PROMISE_MANAGER: false,

  jasmineNodeOpts: {
      showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },

    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json')
      });

      //html报告的配置
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath:'./reporter/html', // 每次执行测试程序都会生成报告存于该路径下
          takeScreenshots:true, // 是否获取截图
          takeScreenshotsOnlyOnFailures: true, // 仅在失败时获取截图
          filePrefix:'index', // 文件名打头字符串
          fileNameDateSuffix: true,
          cleanDestination:false
        }),
      );

      // 控制台打印
      jasmine.getEnv().addReporter(new SpecReporter());
  }
};
