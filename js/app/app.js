import { Engine } from "../engine/engine.js";
import { World } from "../engine/world/world.js";
import { Renderer } from "../engine/rendering/renderer.js"
import { Scene } from "../engine/world/scene.js"
import actor from "../engine/controllers/actor.js"
import entities from "../engine/world/entities/entity-creator.js"

export const run = () => {
  const canvas = document.getElementById("canvas")
  const scene = new Scene()
  const world = new World(scene)
  const renderer = new Renderer()

  const movement = (actor.move(world))({ a: "1" })
  const actorMovement = movement

  actorMovement(2, 3, 4)

  canvas.onmousedown = e => {
    const x = e.x
    const y = e.y
    engine.addEvent((engine) => engine.world.scene.addEntity(entities.createEntity(x, y)))
  }

  const engine = new Engine(world, renderer, canvas.width, canvas.height)
  engine.run()
}
