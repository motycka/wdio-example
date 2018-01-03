class Button {
  constructor(selector) {
    this.selector = selector;
  }

  click() {
    return $(this.selector).click();
  }
}

export default Button;
