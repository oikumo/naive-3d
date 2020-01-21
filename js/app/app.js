import { Engine, Dimension2D } from "../engine/engine.js";
import { World } from "../engine/world/world.js";
import { Renderer } from "../engine/rendering/renderer.js"
import { Scene } from "../engine/world/scene.js"

export const run = () => {
  const canvas = document.getElementById("canvas")
  const dim = new Dimension2D(canvas.width, canvas.height)
  const scene = new Scene()
  const world = new World(scene)
  const renderer = new Renderer()

  canvas.onmousedown = e => {
    scene.addEntity(e.x, e.y)
  }

  const engine = new Engine(world, renderer, dim)
  engine.run()

  /*
  canvas.onmousemove = evt => {
    engine.aim.center.x = evt.screenX
    engine.aim.center.y = evt.screenY - 100
  }

  canvas.onmousedown = e => {
    engine.addTriangle(e.x, e.y)
    engine.addCube()
    engine.addSprite(e.x, e.y)
  }

  engine.quad = {
    a: { x: 100, y: 200 },
    b: { x: 400, y: 200 },
    c: { x: 200, y: 400 },
    d: { x: 400, y: 600 }
  }
  */
}
