import { CanvasRenderer } from "./canvas-renderer.js"
import { RenderTexture } from "./render-texture.js"
import { Texture } from '../engine/rendering/textures/texture.mjs'
import { Entity } from '../engine/world/entity.mjs'
import { moveTo } from '../engine/math/vector.mjs'
import { rectPointsInOther, Rect } from '../engine/math/geometry.mjs'

const interval = 5

export const run = () => {
  const canvas = document.getElementById("canvas")
  const canvasRender = new CanvasRenderer(canvas)

  const renderTex = new RenderTexture(canvasRender.imageSize())
  let bgColor = 0xFF555555

  const tex = new Texture(100, 100)
  tex.fill(() => parseInt(0xFF0000FF))

  const obstacle = new Entity(200, 200, 100, 100)
  const entity = new Entity(100, 100, 100, 100)
  let movement = null
  let time = 0

  const drawObstacle = () => {
    tex.paintTo(renderTex.texture, canvasRender.width, obstacle.center.x, obstacle.center.y)
  }

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
        const nextPosition = movement(time)
        const entityRect = new Rect(nextPosition.x, nextPosition.y, entity.dim.width, entity.dim.height)
        const obstacleRect = new Rect(obstacle.center.x, obstacle.center.y, obstacle.dim.width, obstacle.dim.height)
        const collisionPoints = rectPointsInOther(entityRect, obstacleRect)
        if (collisionPoints.length == 0) {
          entity.center = nextPosition
        } else {
          time -= 0.1
          entity.center = movement(time)
        }

        tex.paintTo(renderTex.texture, canvasRender.width, entity.center.x, entity.center.y)
        time += 0.001
      }
    }
    drawObstacle()
    canvasRender.draw(renderTex.buf8)
  }, interval)
}