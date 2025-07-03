class Controls {
  public forward: boolean;
  public left: boolean;
  public right: boolean;
  public reverse: boolean;

  constructor(
    forward: boolean,
    left: boolean,
    right: boolean,
    reverse: boolean
  ) {
    this.forward = forward;
    this.left = left;
    this.right = right;
    this.reverse = reverse;
    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (e: KeyboardEvent) => {
      console.log(e);
    };
  }
}

export default Controls;
