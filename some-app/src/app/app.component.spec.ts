import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SomeClass } from './example-classes/SomeClass';

describe('AppComponent', () => {
  
  var someVar: SomeClass = null;

  // beforeEach() is used for setting up objects and stuff,
  // essentially, before the actual tests run.
  beforeEach(async(() => {
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
});
