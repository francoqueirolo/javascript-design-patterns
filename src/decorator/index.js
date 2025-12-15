import { User } from './user';
import { execDecorator, adminDecorator } from './decorators';

export const decorator = {
  init: function () {
    const user1 = new User('user1');
    const user2 = new User('user2');
    const user3 = new User('user3');

    user1.decoratePermissions(execDecorator);
    user2.decoratePermissions(adminDecorator);

    user3.decoratePermissions(execDecorator);
    user3.decoratePermissions(adminDecorator);

    console.log(user1.id, user1.getPermissions());
    console.log(user2.id, user2.getPermissions());

    console.log(user3.id, user3.getPermissions());
  },
};
