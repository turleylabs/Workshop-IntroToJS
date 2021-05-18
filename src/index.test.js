test('calling the fizzBuzz function', () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(7)).toEqual("7");    
});

xtest('call a function that returns 10 fizzBuzz values', () => {
    expect(callFizzBuzz()).toEqual(["0", "1", "2", "Fizz", "4", "Buzz", "6", "7", "8", "9"]);
});

xtest('what happens when I use a string instead of a number', () => {
    expect(fizzBuzz("5")).toEqual("5");
});

xtest('what could possibly make this true?', () => {
    expect(fizzBuzz(0)).toEqual("Blah");
    expect(fizzBuzz("0")).toEqual("Blah");
    expect(fizzBuzz("")).toEqual("Blah");
    expect(fizzBuzz(false)).toEqual("Blah");
});

xtest('is divisible by', () => {
    expect(isDivisibleBy(6, 2)).toBeTruthy();
    expect(isDivisibleBy(5, 3)).toBeFalsy();
});

xtest('fizzbuzz result object', () => {
    const fizzBuzzResult = calculateFizzBuzz(3);
    expect(fizzBuzzResult.result).toEqual("Fizz");
});

xtest('create fizzBuzzer object', () => {
    const fizzBuzzer = createFizzBuzzer(3);
    expect(fizzBuzzer.number).toEqual(3);
    expect(fizzBuzzer.doFizzBuzz()).toEqual("Fizz");
});

xtest('transforming an array', () => {
    expect(transformArray()).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});