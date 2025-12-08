import { ModuleA } from './moduleA';
import { ModuleB } from './moduleB';

export const pubsub = {
  init: function() {
    new ModuleA();
    const moduleB = new ModuleB();

    moduleB.publishEvent();
  }
};
