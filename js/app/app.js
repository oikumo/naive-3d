import { Engine } from "../engine/engine.js";
import { deltaTime } from "../engine/time.js";

export const run = () => {
  const canvas = document.getElementById("canvas")
  const interval = 5
  const timer = {
    last: Date.now(),
    delta: function () {
      const now = Date.now()
      const delta = now - this.last
      return delta
    }
  }

  const width = canvas.width
  const height = canvas.height
  const core = new Engine()
  core.aim = core.createQuad()

  canvas.onmousemove = evt => {
    core.aim.center.x = evt.screenX
    core.aim.center.y = evt.screenY - 100
  }

  canvas.onmousedown = e => {
    core.addTriangle(e.x, e.y)
    core.addCube()
    core.addSprite(e.x, e.y)
  }

  core.quad = {
    a: { x: 100, y: 200 },
    b: { x: 400, y: 200 },
    c: { x: 200, y: 400 },
    d: { x: 400, y: 600 }
  }

  setInterval(() => {
    core.draw(width, height, timer.delta() * 0.001);
  }, interval)
}
