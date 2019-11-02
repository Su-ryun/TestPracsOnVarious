function greeting(guest) {
    return 'Hello, ' + guest + '!';
}

describe('greeting()', () => {
    it('says hello', () => {
        expect(greeting('Jest')).toBe('Hello, Jest!');
    });
});