import { CanvasRenderer } from "./canvas-renderer.js"
import { RenderTexture } from "./render-texture.js"
import { Scene } from "../engine/world/scene.js"
import { renderEntities } from "./rendering.js"
import { SceneEvents } from "./scene-events.js"

const interval = 5

export const run = () => {
  const canvas = document.getElementById("canvas")

  // Objects
  const scene = new Scene()

  // Rendering
  const canvasRender = new CanvasRenderer(canvas)
  const width = canvasRender.width
  const height = canvasRender.height
  const renderTex = new RenderTexture(canvasRender.imageSize())
  let bgColor = 0xFF555500

  // Events
  const sceneEvents = new SceneEvents()

  // User Input
  canvas.onmousedown = (evt) => {
    sceneEvents.addEntity(evt.x, evt.y)
    //const img = canvas.toDataURL("image/png");
  }

  // Loop
  setInterval(() => {
    renderTex.clear(bgColor)
    sceneEvents.apply(scene)
    //renderEntities(scene, renderTex.texture, width, height)
    canvasRender.draw(renderTex.buf8)
  }, interval)
}
