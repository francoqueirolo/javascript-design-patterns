import { Mediator } from './mediator';
import { Colleague } from './colleague';

export const mediator = {
  init: function () {
    const mediator = new Mediator();
    const colleague1 = Colleague.create('colleague1', mediator);
    const colleague2 = Colleague.create('colleague2', mediator);
    const colleague3 = Colleague.create('colleague3', mediator);

    colleague1.sendMessage('Hey there', 'colleague2');
    colleague2.sendMessage('Hi colleague1', 'colleague1');
    colleague3.sendMessage('Hey guys!');
  },
};
