import { Person } from './person';

export const composite = {
  init: function () {
    const root = new Person('Fred');

    const john = new Person('John');
    const jane = new Person('Jane');
    const jack = new Person('Jack');
    const jill = new Person('Jill');
    const james = new Person('James');
    const jess = new Person('Jess');

    root.addChild(john);
    root.addChild(jane);

    jane.addChild(jack);
    jane.addChild(jill);

    jill.addChild(james);

    james.addChild(jess);

    root.traverseDown();
    //jess.traverseDown();

    //jess.traverseUp();
    //root.traverseUp();
  },
};
