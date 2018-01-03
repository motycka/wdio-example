class InputField {
  constructor(selector) {
    this.selector = selector;
  }

  setValue(value) {
    return $(this.selector).setValue(value);
  }

  getValue() {
    return $(this.selector).getValue();
  }

  getError() {
    return 'Invalid value'
  }
}

export default InputField;
