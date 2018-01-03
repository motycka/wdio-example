class CheckBox {
  constructor(selector) {
    this.selector = selector;
  }

  isChecked() {
    return $(this.selector).$(':checked').isExisting()
  }

  check() {
    if (!this.isChecked()) $(this.selector).click();
  }

  uncheck() {
    if (this.isChecked()) $(this.selector).click();
  }
}

export default CheckBox;

