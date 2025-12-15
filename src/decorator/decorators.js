export const adminDecorator = {
  getPermissions: function () {
    return 'public:write,confidential:write';
  },
};

export const execDecorator = {
  getPermissions: function () {
    return 'public:read,confidential:read';
  },
};
