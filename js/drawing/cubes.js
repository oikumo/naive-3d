function drawLine2D(texture, textureWidth, textureHeight, color, p1, p2, q1, q2) {
    let  i, t, x, y
    const delta1 = q1 - p1
    const delta2 = q2 - p2
    const n = Math.floor(Math.sqrt(Math.pow(delta1, 2) + Math.pow(delta2, 2)))
    
    for (i = n - 1; i >= 0 ; --i) { 
        t = i / n

        x = Math.floor(p1 + (t * delta1))       
        if (x < 0 || x >= textureWidth)
          continue

        y = p2 + Math.floor(t * delta2)
        if (y < 0 || y  >= textureHeight)
            continue

        texture[Math.floor(y * textureWidth) + x] = color
    }
}

export function drawCubes(texture, textureWidth, textureHeight, vertices, elementsCount) {
    let i
    const red = 0xFF0000FF
    const blue = 0xFFFF0000
    const green = 0xFF00FF00

    const length = 24 + 3
    const len = elementsCount * length
    let ax, ay, bx, by, cx, cy, dx, dy, ex, ey, fx, fy, gx,gy, hx, hy

    for (i = 0; i < len; i += length) {
        // a
        ax = Math.ceil(vertices[i + 3])
        ay = Math.ceil(vertices[i + 4])
        // b Math.ceil(
        bx = Math.ceil(vertices[i + 6]) 
        by = Math.ceil(vertices[i + 7]) 
        // c Math.ceil(
        cx = Math.ceil(vertices[i + 9]) 
        cy = Math.ceil(vertices[i + 10])
        // d Math.ceil(
        dx = Math.ceil(vertices[i + 12]) 
        dy = Math.ceil(vertices[i + 13])
        // e Math.ceil(
        ex = Math.ceil(vertices[i + 15]) 
        ey = Math.ceil(vertices[i + 16])
        // f Math.ceil(
        fx = Math.ceil(vertices[i + 18]) 
        fy = Math.ceil(vertices[i + 19])
        // g Math.ceil(
        gx = Math.ceil(vertices[i + 21]) 
        gy = Math.ceil(vertices[i + 22])
        // h Math.ceil(
        hx = Math.ceil(vertices[i + 24]) 
        hy = Math.ceil(vertices[i + 25])
    
        drawLine2D(texture, textureWidth, textureHeight, red, ax, ay, bx, by)
        drawLine2D(texture, textureWidth, textureHeight, red, bx, by, cx, cy)
        drawLine2D(texture, textureWidth, textureHeight, red, cx, cy, dx, dy)
        drawLine2D(texture, textureWidth, textureHeight, red, dx, dy, ax, ay)
        drawLine2D(texture, textureWidth, textureHeight, green, ex, ey, fx, fy)
        drawLine2D(texture, textureWidth, textureHeight, green, fx, fy, gx, gy)
        drawLine2D(texture, textureWidth, textureHeight, green, gx, gy, hx, hy)        
        drawLine2D(texture, textureWidth, textureHeight, green, hx, hy, ex, ey)
        drawLine2D(texture, textureWidth, textureHeight, blue, ax, ay, ex, ey)
        drawLine2D(texture, textureWidth, textureHeight, blue, bx, by, fx, fy)
        drawLine2D(texture, textureWidth, textureHeight, blue, cx, cy, gx, gy)
        drawLine2D(texture, textureWidth, textureHeight, blue, dx, dy, hx, hy)
    }
}

export function translate(vertices, elementsCount, tx = 1, ty = .01, tz = .01) {
    let i
    const length = 24 + 3
    const len = elementsCount * length

    for (i = 0; i < len; i += length) {
        // center
        vertices[i    ]     += tx
        vertices[i + 1]     += ty
        vertices[i + 2]     += tz

        vertices[i + 3]     += tx
        vertices[i + 4]     += ty
        vertices[i + 5]     += tz

        vertices[i + 6]     += tx
        vertices[i + 7]     += ty
        vertices[i + 8]     += tz

        vertices[i + 9]     += tx
        vertices[i + 10]    += ty
        vertices[i + 11]    += tz

        vertices[i + 12]    += tx
        vertices[i + 13]    += ty
        vertices[i + 14]    += tz

        vertices[i + 15]    += tx
        vertices[i + 16]    += ty
        vertices[i + 17]    += tz

        vertices[i + 18]    += tx
        vertices[i + 19]    += ty
        vertices[i + 20]    += tz

        vertices[i + 21]    += tx
        vertices[i + 22]    += ty
        vertices[i + 23]    += tz

        vertices[i + 24]    += tx
        vertices[i + 25]    += ty
        vertices[i + 26]    += tz
    }
}

export function rotateY(vertices, elementsCount) {
    let angle = .01    
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    
    let i, rx, rz
    const length = 24 + 3
    const len = elementsCount * length

    for (i = 0; i < len; i += length) {
        // a
        rx = (vertices[i + 3] * cos) + (vertices[i + 5] * sin)
        rz = (vertices[i + 3] * -sin) + (vertices[i + 5] * cos)
        vertices[i + 3] = rx
        vertices[i + 5] = rz

        rx = (vertices[i + 6] * cos) + (vertices[i + 8] * sin)
        rz = (vertices[i + 6] * -sin) + (vertices[i + 8] * cos)
        vertices[i + 6] = rx
        vertices[i + 8] = rz

        rx = (vertices[i + 9] * cos) + (vertices[i + 11] * sin)
        rz = (vertices[i + 9] * -sin) + (vertices[i + 11] * cos)
        vertices[i + 9]  = rx
        vertices[i + 11] = rz

        rx = (vertices[i + 12] * cos) + (vertices[i + 14] * sin)
        rz = (vertices[i + 12] * -sin) + (vertices[i + 14] * cos)
        vertices[i + 12] = rx
        vertices[i + 14] = rz

        rx = (vertices[i + 15] * cos) + (vertices[i + 17] * sin)
        rz = (vertices[i + 15] * -sin) + (vertices[i + 17] * cos)
        vertices[i + 15] = rx
        vertices[i + 17] = rz

        rx = (vertices[i + 18] * cos) + (vertices[i + 20] * sin)
        rz = (vertices[i + 18] * -sin) + (vertices[i + 20] * cos)
        vertices[i + 18] = rx
        vertices[i + 20] = rz

        rx = (vertices[i + 21] * cos) + (vertices[i + 23] * sin)
        rz = (vertices[i + 21] * -sin) + (vertices[i + 23] * cos)
        vertices[i + 21] = rx
        vertices[i + 23] = rz

        rx = (vertices[i + 24] * cos) + (vertices[i + 26] * sin)
        rz = (vertices[i + 24] * -sin) + (vertices[i + 26] * cos)
        vertices[i + 24] = rx
        vertices[i + 26] = rz
    }
}
export function rotateX(vertices, elementsCount) {
    let angle = .01    
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    
    let i, ry, rz
    const length = 24 + 3
    const len = elementsCount * length

    for (i = 0; i < len; i += length) {
        // a
        ry = (vertices[i + 4] * cos) + (vertices[i + 5] * -sin)
        rz = (vertices[i + 4] * sin) + (vertices[i + 5] * cos)
        vertices[i + 4] = ry
        vertices[i + 5] = rz

        ry = (vertices[i + 7] * cos) + (vertices[i + 8] * -sin)
        rz = (vertices[i + 7] * sin) + (vertices[i + 8] * cos)
        vertices[i + 7] = ry
        vertices[i + 8] = rz

        ry = (vertices[i + 10] * cos) + (vertices[i + 11] * -sin)
        rz = (vertices[i + 10] * sin) + (vertices[i + 11] * cos)
        vertices[i + 10]  = ry
        vertices[i + 11] = rz

        ry = (vertices[i + 13] * cos) + (vertices[i + 14] * -sin)
        rz = (vertices[i + 13] * sin) + (vertices[i + 14] * cos)
        vertices[i + 13] = ry
        vertices[i + 14] = rz

        ry = (vertices[i + 16] * cos) + (vertices[i + 17] * -sin)
        rz = (vertices[i + 16] * sin) + (vertices[i + 17] * cos)
        vertices[i + 16] = ry
        vertices[i + 17] = rz

        ry = (vertices[i + 19] * cos) + (vertices[i + 20] * -sin)
        rz = (vertices[i + 19] * sin) + (vertices[i + 20] * cos)
        vertices[i + 19] = ry
        vertices[i + 20] = rz

        ry = (vertices[i + 22] * cos) + (vertices[i + 23] * -sin)
        rz = (vertices[i + 22] * sin) + (vertices[i + 23] * cos)
        vertices[i + 22] = ry
        vertices[i + 23] = rz

        ry = (vertices[i + 25] * cos) + (vertices[i + 26] * -sin)
        rz = (vertices[i + 25] * sin) + (vertices[i + 26] * cos)
        vertices[i + 25] = ry
        vertices[i + 26] = rz
    }        
}