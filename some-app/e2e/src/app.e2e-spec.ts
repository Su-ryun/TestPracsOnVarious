import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { By } from 'selenium-webdriver';
import { time } from 'console';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // https://stackoverflow.com/questions/20927652/how-to-use-protractor-on-non-angularjs-website
  // If I am interacting with a non-Angular website, I can use the browser.driver to directily interact with the browser driver.
  // https://medium.com/@walmyrlimaesilv/simulating-mobile-devices-with-protractor-tests-7dca9d9757e8
  // Can emulate mobile too.
  // https://stackoverflow.com/questions/33757170/protractor-run-specific-test-as-mobile-device
  // https://github.com/angular/protractor/issues/605
  // Can emulate mobile on specific spec files.
  it('Login', () => {
    browser.driver.get('https://www.google.com/');

    browser.driver.sleep(5000);
    browser.driver.findElement(By.id('gb_70')).click();
    browser.driver.findElement(By.id('identifierId')).sendKeys('SOO SECRET');
    browser.driver.findElement(By.className('VfPpkd-RLmnJb')).click();

    browser.driver.sleep(5000)
    browser.driver.findElement(By.id('username')).sendKeys('EVER SECRET');
    browser.driver.findElement(By.id('password')).sendKeys('DARKEST SECRET');
    browser.driver.findElement(By.className('form-button')).click();
    browser.driver.sleep(5000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
