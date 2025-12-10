export class SlowObject {
  init() {
    for (var x = 0, max = 10000; x < max; x++) {
      console.log('slowness...');
    }
  }

  someMethod() {
    console.log('some method on the slow object was invoked');
  }
}
