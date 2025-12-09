export class Observers {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observerToRemove) {
    this.observers = this.observers.filter(function (observer) {
      return observer !== observerToRemove;
    });
  }

  get() {
    return this.observers;
  }
}
