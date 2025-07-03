import Car from "./Classes/Car";
import "./style.css";

const canvas = document.getElementById("my-canvas") as HTMLCanvasElement;

function setCanvasSize(canvas: HTMLCanvasElement) {
  canvas.width = 200;
  canvas.height = window.innerHeight;
}

setCanvasSize(canvas);

const ctx = canvas?.getContext("2d");
if (!ctx) throw new Error("Could not get 2D context");

const car = new Car(100, 100, 30, 50);
car.draw(ctx);

window.addEventListener("resize", () => {
  setCanvasSize(canvas);
});
