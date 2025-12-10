import { SlowObjectProxy } from './slowObjectProxy';

// Demostración del patrón Proxy
export const proxy = {
  init: function () {
    const slowObjectProxy = new SlowObjectProxy();

    slowObjectProxy.someMethod();
    // Second call
    slowObjectProxy.someMethod();
  },
};
