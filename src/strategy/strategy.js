export class Validator {
  constructor() {
    this.validator = null;
  }

  selectValidator(validator) {
    this.validator = validator;

    return this;
  }

  validate(value) {
    if (this.validator) {
      return this.validator.validate(value);
    }
    throw new Error('No validator selected');
  }
}

