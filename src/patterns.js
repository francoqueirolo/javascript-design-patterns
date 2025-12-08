import { factory } from "./factory";

var examples = {
  factory: factory,
  //   pubsub: pubsub,
  //   strategy: strategy,
  //   observer: observer,
  //   cor: cor,
  //   mediator: mediator,
  //   iterator: iterator,
  //   facade: facade,
  //   decorator: decorator,
  //   adapter: adapter,
  //   composite: composite,
  //   proxy: proxy,
};

window.run = function (example) {
  examples[example].init();
};

export const hello = () => {
  console.log("Module Loaded!");
};
