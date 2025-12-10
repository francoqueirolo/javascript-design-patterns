import { Iterator } from './iterator';

export const iterator = {
  init: function () {
    const testString = 'teststring';
    const testArray = [
      { something: 'yay', other: 123 },
      { something: 'test', other: 456 },
    ];

    const iterator = new Iterator();
    const myStringIterator = iterator.build(testString);
    const myArrayIterator = iterator.build(testArray);

    console.log(myArrayIterator.next());
    console.log(myArrayIterator.next());

    while (!myStringIterator.isDone()) {
      console.log(myStringIterator.next());
    }

    console.log(myStringIterator.reset().take(4).join(''));
  },
};
