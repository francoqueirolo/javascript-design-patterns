export class Processor {
  processString(string) {
    return string.substring(0, string.length / 2);
  }

  processNumber(number) {
    return number * number;
  }

  processBoolean(bool) {
    return !bool;
  }

  processArray(array) {
    return array.length;
  }

  processObject(object) {
    return Object.keys(object).length;
  }
}
