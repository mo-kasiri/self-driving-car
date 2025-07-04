import Controls from "./Controls";
const eps = 0.0001;
const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);
class Car {
  #x: number;
  #y: number;
  #width: number;
  #height: number;

  // car controls
  #speed: number = 0;
  #acceleration: number = 0.1;
  #maxSpeed: number = 3;
  #friction: number = 0.05;
  #angle: number = 0.0;

  #controls: Controls;

  constructor(x: number, y: number, width: number, height: number) {
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.#controls = new Controls();
  }

  update() {
    this.#move();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.#x, this.#y);

    ctx.rotate(-this.#angle);

    ctx.beginPath();
    ctx.rect(-this.#width / 2, -this.#height / 2, this.#width, this.#height);
    ctx.fill();

    ctx.restore();
  }

  #move() {
    if (this.#controls.forward) {
      this.#speed += this.#acceleration;
    }
    if (this.#controls.reverse) {
      this.#speed -= this.#acceleration;
    }
    if (this.#speed != 0) {
      const flip = this.#speed > 0 ? -1 : +1;
      if (this.#speed > eps || this.#speed < -eps) {
        if (this.#controls.right) {
          this.#angle += 0.03 * flip;
        }
        if (this.#controls.left) {
          this.#angle -= 0.03 * flip;
        }
      }
    }

    this.#speed = clamp(this.#speed, -this.#maxSpeed / 3, this.#maxSpeed);
    if (this.#speed > 0) this.#speed -= this.#friction;
    if (this.#speed < 0) this.#speed += this.#friction;

    this.#x -= Math.sin(this.#angle) * this.#speed;
    this.#y -= Math.cos(this.#angle) * this.#speed;
    console.log("speed: " + this.#speed);
  }
}

export default Car;
