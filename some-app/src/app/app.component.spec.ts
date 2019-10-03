import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SomeClass } from './example-classes/SomeClass';

// Describe is used to house all the tests those are related to
// whatever I am trying to test.
describe('AppComponent', () => {
  
  let appComponent: AppComponent = null;
  var someVar: SomeClass = null;

  // beforeEach() is used for setting up objects and stuff,
  // essentially, before the actual tests run.
  beforeEach(async(() => {
    appComponent = new AppComponent();
    someVar = new SomeClass();

    // The configureTestingModule method takes in an object that has to use the TestModuleMetadata interface.
    TestBed.configureTestingModule(
      // Whatever that is being tossed inside the configureTestingModule
      // is called TestModuleMetadata, where as I can see ...
      // https://angular.io/api/core/testing/TestModuleMetadata
      {
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('My first component test.', () => {
    expect(appComponent.title).toBe('some-app');
  })

  it('Our first Jasmine test', () => {
    expect(true).toBe(true);
  })

  it('My first test.', () => {
    expect("a").toBe("a");
  })

  it('My first class test', () => {
    expect(someVar.getSomeField()).toBe("Somefield");
  })

  it('Test someVar with new init.', () => {
    someVar = new SomeClass("NotJustAnyField");
    expect(someVar.getSomeField()).not.toBe("SomeField");
    expect(someVar.getSomeField()).toBe("NotJustAnyField");
  })

  // "tests commonly have a teardown part ..."
  // "... to make sure instances of variables get detroyed."
  // - Testing Angular Applications.
  afterEach(() => {
    someVar = null;
  });
});
