import { SlowObject } from './slowObject';

export class SlowObjectProxy {
  #instance = null;
  #initialized = false;

  someMethod() {
    if (this.#initialized && this.#instance) {
      console.log('Using initialized instance');
      return this.#instance.someMethod();
    }

    console.log('Slow object, status: Initialized');
    this.#instance = new SlowObject();
    this.#instance.init(); // loading big data
    this.#initialized = true;

    console.log('Slow object, status: Loaded');
    return this.#instance.someMethod();
  }
}
