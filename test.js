const capitalize = require('./capitalize');

test('Capitalizes the first letter', () => {
    expect(capitalize('fight')).toBe('Fight');
})
test('Deals with numbers', () => {
    expect(capitalize('1apple')).toBe('1Apple');
})
test('Deals with blank space', () => {
    expect(capitalize(' apple')).toBe('Apple');
})
test('Deals with long strings', () => {
    expect(capitalize(' hello World!')).toBe('Hello World!')
})


const reverseString = require('./reverseString');
test('Reverses a word', () => {
    expect(reverseString('fight')).toBe('thgif')
})

test('Reverses a sentence', () => {
    expect(reverseString('I want to fight!')).toBe('!thgif ot tnaw I')
})

test('Reverses a sentence with random spaces', () => {
    expect(reverseString(' I fight. ')).toBe('.thgif I')
})

const calculator = require('./calculator');
test('adds', () => {
    expect(calculator.add(1,1)).toBe(2);
})
test('subtracts', () => {
    expect(calculator.subtract(2,1)).toBe(1);
})
test('mutiplies', () => {
    expect(calculator.multiply(2,2)).toBe(4);
})
test('divide', () => {
    expect(calculator.divide(10,5)).toBe(2);
})
test('deals with letters', () => {
    expect(calculator.add('apple', 'banana')).toBe('Error');
})

const caesarCipher = require('./caesarCipher');
test('test if it works', () => {
    expect(caesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toBe('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.')
})

const analyzeArray = require('./analyzeArray');
test('test array properties', () => {
    const obj = analyzeArray([1,8,3,4,2,6]);
    expect(obj).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});