export class User {
  constructor(id) {
    this.id = id;
    this.getPermissions = function () {
      return 'default:read';
    };
  }

  decoratePermissions(decorator) {
    this.getPermissions = decorator.getPermissions;
  }
}
