import { Timer } from "./time.js";

export function Dimension2D(width, height) {
  this.width = width
  this.height = height
}

export function Engine(world, renderer, screenDimension, interval = 5) {
  this.world = world
  this.renderer = renderer
  this.interval = interval
  this.screenDimension = screenDimension
  this.dt = new Timer().delta
}

Engine.prototype.run = function () {
  setInterval(() => {
    // this.world, this.screenDimension, this.dt() * 0.001
    this.renderer.clear()
    this.world.update(this.renderer.texture, this.screenDimension.width, this.screenDimension.height)    
    this.renderer.draw()
  }, this.interval)
}

