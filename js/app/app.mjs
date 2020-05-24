import { CanvasRenderer } from "./canvas-renderer.js"
import { RenderTexture } from "./render-texture.js"
import { Texture } from '../engine/rendering/textures/texture.mjs'
import { Entity, moveTo } from '../engine/world/entity.mjs'

const interval = 5

export const run = () => {
  const canvas = document.getElementById("canvas")
  const canvasRender = new CanvasRenderer(canvas)

  const renderTex = new RenderTexture(canvasRender.imageSize())
  let bgColor = 0xFF555555

  const tex = new Texture(100, 100)
  tex.fill(() => parseInt(0xFF0000FF))

  const entity = new Entity(100, 100)
  let movement = null
  let time = 0

  canvas.onmousedown = (evt) => {
    movement = moveTo(entity.center, { x: evt.x, y: evt.y })
    time = 0
  }

  setInterval(() => {
    renderTex.clear(bgColor)

    if (movement != null) {
      if (time >= 1) {
        movement = null
        time = 0
      }
      else {
        entity.center = movement(time)
        tex.paintTo(renderTex.texture, canvasRender.width, entity.center.x, entity.center.y)
        time += 0.001
      }
    }
    canvasRender.draw(renderTex.buf8)
  }, interval)
}