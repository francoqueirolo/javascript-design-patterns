import { Processor } from './processor';

export class Facade {
  constructor() {
    this.processor = new Processor();
  }

  processThing(thing) {
    const type = typeof thing;
    console.log(type);

    switch (type) {
      case 'string':
        return this.processor.processString(thing);
      case 'number':
        return this.processor.processNumber(thing);
      case 'boolean':
        return this.processor.processBoolean(thing);
      case 'object':
        return this.processor.processObject(thing);
      default:
        return 'Unable to process the thing!';
    }
  }
}
