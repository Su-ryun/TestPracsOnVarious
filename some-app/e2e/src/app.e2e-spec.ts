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
