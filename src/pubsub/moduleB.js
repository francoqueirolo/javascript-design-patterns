import { pubsub } from './pubsub';

export class ModuleB {
  publishEvent() {
    const data = {
      something: 'some data'
    };

    pubsub.publish('atopic', data);
  }
}
