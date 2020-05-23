import { CanvasRenderer } from "./canvas-renderer.js"
import { RenderTexture } from "./render-texture.js"
import { Texture } from '../engine/rendering/textures/texture.mjs'

const interval = 5

export const run = () => {
  const canvas = document.getElementById("canvas")
  const canvasRender = new CanvasRenderer(canvas)

  const renderTex = new RenderTexture(canvasRender.imageSize())
  let bgColor = 0xFF555555

  const tex = new Texture(100, 100)
  tex.fill(() => parseInt(0xFF0000FF))

  const brushes = []
  canvas.onmousedown = (evt) => {
    brushes.push(() => tex.paintTo(renderTex.texture, canvasRender.width, evt.x, evt.y))
  }

  setInterval(() => {
    renderTex.clear(bgColor)
    brushes.forEach((brush) => brush())
    canvasRender.draw(renderTex.buf8)
  }, interval)
}