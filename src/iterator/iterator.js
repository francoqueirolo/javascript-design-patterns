export class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  isDone() {
    return this.index === this.collection.length;
  }

  reset() {
    this.index = 0;
    return this;
  }

  take(numberOfItems) {
    const newIndex = this.index + numberOfItems;
    const newArr = Array.prototype.slice.call(
      this.collection,
      this.index,
      newIndex
    );

    this.index = newIndex;
    return newArr;
  }

  build(collection) {
    const keys = Object.keys(collection);
    let tempArray = [];

    if (typeof collection === 'number') {
      collection = collection.toString();
    }

    if (keys.length) {
      for (let prop in collection) {
        tempArray.push(collection[prop]);
      }
      collection = tempArray;
    }

    if (collection.length) {
      return new Iterator(collection);
    } else {
      throw 'Iterator cannot be built from Boolean, null or undefined';
    }
  }
}
