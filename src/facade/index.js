import { Facade } from './facade';

export const facade = {
  init: function () {
    const facade = new Facade();

    console.log(facade.processThing('test string'));
    console.log(facade.processThing(5));
    console.log(facade.processThing(true));
    console.log(facade.processThing([1, 2, 3]));
    console.log(facade.processThing({ prop: 'something' }));
  },
};
