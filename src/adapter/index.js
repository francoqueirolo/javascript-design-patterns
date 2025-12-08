import { OldInterfaceAdapter } from './oldInterfaceAdapter';

export const adapter = {
  init: function() {
    const oldInterfaceAdapter = new OldInterfaceAdapter();
    oldInterfaceAdapter.doSomethingOld();
  }
};
