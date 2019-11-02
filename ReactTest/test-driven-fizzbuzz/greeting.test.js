//npx​​ ​​jest​​ ​​--watchAll
//By using the above command, jest will continously run the tests for you,
//soon as you hit save.
const fizzBuzz = require('./index.js');

describe('fizzBuzz()', () => {
    it('returns stuff about FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(22)).toBe(22);
    });
});