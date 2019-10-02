export class SomeClass {
    someField: any;

    // https://stackoverflow.com/questions/43326380/how-to-define-optional-constructor-arguments-with-defaults-in-typescript
    // I like the below way of creating the default constructor.
    constructor(someField: string = "Somefield") {
        this.someField = someField;
    }

    public getSomeField() {
        return this.someField;
    }
}