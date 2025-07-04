import Car from "./Classes/Car";
import "./style.css";

const canvas = document.getElementById("my-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Could not get 2D context");

function setCanvasSize() {
  canvas.width = 200;
  canvas.height = window.innerHeight; // Moved here from animate()
}

const car = new Car(100, 100, 30, 50);

// Animation loop
let animationFrameId: number | null = null;

const animate = (timestamp?: number) => {
  // Clear canvas efficiently
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  car.update(); // Pass timestamp if needed
  car.draw(ctx);

  animationFrameId = requestAnimationFrame(animate);
};

// Start/stop control
function startAnimation() {
  if (!animationFrameId) {
    setCanvasSize();
    animationFrameId = requestAnimationFrame(animate);
  }
}

function stopAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Initialize
startAnimation();

// Handle resize
window.addEventListener("resize", () => {
  setCanvasSize();
});

window.addEventListener("beforeunload", stopAnimation);
