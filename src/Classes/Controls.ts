class Controls {
  public forward: boolean;
  public left: boolean;
  public right: boolean;
  public reverse: boolean;

  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;
    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (e: KeyboardEvent) => {
      //console.log(e);
      switch (e.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
      //console.table(this);
    };

    document.onkeyup = (e: KeyboardEvent) => {
      //console.log(e);
      switch (e.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
    };
  }
}

export default Controls;
