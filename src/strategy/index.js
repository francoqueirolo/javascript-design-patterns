import { emailValidator } from './emailValidator';
import { telValidator } from './telValidator';
import { Validator as Strategy } from './strategy';

export const strategy = {
  init: function () {
    const validator = new Strategy();

    console.log(validator.selectValidator(telValidator).validate('012345678901'));

    console.log(validator.selectValidator(emailValidator).validate('test'));
  }
}
