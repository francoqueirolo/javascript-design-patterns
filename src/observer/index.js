import { Collection } from './subject';
import { Observer } from './observer';
import { Observers } from './observers';

export const observer = {
  init: function () {
    const subject = new Collection();
    const observer = new Observer('observer1');
    const otherObserver = new Observer('observer2');

    const data = {
      prop: 'something',
    };
    const moreData = {
      prop: 'something else',
    };

    subject.observe(observer);
    subject.observe(otherObserver);

    subject.add(data);
    subject.add(moreData);

    subject.unObserve(observer);

    subject.remove(data);

    console.log('Observers: ', subject.observers.get())
  },
};
