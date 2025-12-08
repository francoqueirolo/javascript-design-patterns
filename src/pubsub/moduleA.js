import { pubsub } from './pubsub';

export class ModuleA {
  constructor() {
    this.subscription = pubsub.subscribe('atopic', (data) => {
      console.log('atopic was published with data:', data.something);
      this.subscription.dispose();
    });
  }
}
