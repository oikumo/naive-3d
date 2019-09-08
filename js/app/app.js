import { Core } from "../core/core.js";
import { DeltaTime } from "../core/time.js";

export class App {
  init(interval = 5) {
    const canvas = document.getElementById("canvas");
    this.width = canvas.width;
    this.height = canvas.height;
    this.core = new Core();
    this.core.quad = {
      a: { x: 200, y: 200 },
      b: { x: 500, y: 200 },
      c: { x: 300, y: 500 },
      d: { x: 400, y: 400 }
    };

    canvas.onmousemove = evt => {
      //this.core.quad.b.x = this.width - evt.screenX;
      //this.core.quad.c.y = this.height - evt.screenY;
    };

    canvas.onmousedown = e => {
      this.core.addTriangle(e.x, e.y);
      this.core.addCube();
      this.core.addSprite(e.x, e.y);
    };
    this.deltaTime = new DeltaTime();

    clearInterval(this.loop);

    this.loop = setInterval(() => {
      this.core.draw(this.width, this.height, this.deltaTime.get());
    }, interval);
  }
  pause() {
    clearInterval(this.loop);
  }
}
