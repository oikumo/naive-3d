import { Timer } from "./time.js";
import { SceneRenderer } from "./world/renderer.js"

export function Engine(world, renderer, width, height, intervalMiliSeconds = 5) {
  this.world = world
  this.renderer = renderer
  this.interval = intervalMiliSeconds
  this.width = width
  this.height = height
  this.sceneRenderer = new SceneRenderer(width, height)
  this.events = []
}

Engine.prototype.addEvent = function (event) {
  this.events.push(event)
}

Engine.prototype.run = function () {
  setInterval(() => {
    for (let event = this.events.length - 1; event >= 0; --event) {
      this.events[event](this)
    }

    this.renderer.clear()
    this.world.update(this.renderer.texture, this.width, this.height)
    this.sceneRenderer.renderEntities(this.world.scene, this.renderer.texture)
    this.renderer.draw()
    this.events = []
  }, this.interval)
}

