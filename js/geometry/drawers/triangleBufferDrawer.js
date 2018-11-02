import {drawLine2D} from '../../rendering/brush.js'

export function drawTrianglesBuffer(texture, textureWidth, buffer, angle) {
    const triangles = buffer.triangles
    const colors = buffer.colors
    const len = buffer.len
    let i, index, ax, ay, bx, by, cx, cy, px, py, centerX, centerY, color = 0

    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    for (i = len - 1; i >= 0; --i) {
        index = i * 8
        ax = triangles[index]
        ay = triangles[index + 1]
        bx = triangles[index + 2]
        by = triangles[index + 3]
        cx = triangles[index + 4]
        cy = triangles[index + 5]

        centerX = triangles[index + 6]
        centerY = triangles[index + 7]

        px = ax - centerX
        py = ay - centerY
        ax = (cos * px) - (sin * py) + centerX
        ay = (sin * px) + (cos * py) + centerY

        px = bx - centerX
        py = by - centerY
        bx = (cos * px) - (sin * py) + centerX
        by = (sin * px) + (cos * py) + centerY

        px = cx - centerX
        py = cy - centerY
        cx = (cos * px) - (sin * py) + centerX
        cy = (sin * px) + (cos * py) + centerY
        
        color = colors[i]

        drawLine2D(color, ax, ay, bx, by, texture, textureWidth)
        drawLine2D(color, bx, by, cx, cy, texture, textureWidth)
        drawLine2D(color, cx, cy, ax, ay, texture, textureWidth)
    }   
}