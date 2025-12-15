import { factory } from './factory';
import { pubsub } from './pubsub';
import { adapter } from './adapter';
import { strategy } from './strategy';
import { observer } from './observer';
import { iterator } from './iterator';
import { proxy } from './proxy';
import { composite } from './composite';
import { facade } from './facade';
import { mediator } from './mediator';
import { decorator } from './decorator';

var examples = {
  factory: factory,
  pubsub: pubsub,
  strategy: strategy,
  observer: observer,
  //   cor: cor,
  mediator: mediator,
  iterator: iterator,
  facade: facade,
  decorator: decorator,
  adapter: adapter,
  composite: composite,
  proxy: proxy,
};

window.run = function (example) {
  console.log('run', example);
  examples[example].init();
};

export const start = () => {
  console.log('Module Loaded!');
};
