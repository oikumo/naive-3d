export function drawQuadTexture(data, texture, width, height, vertices) {    
    const ax = Math.floor(vertices[0])
    const ay = Math.floor(vertices[1])
    const bx = Math.floor(vertices[2])
    const by = Math.floor(vertices[3])
    const cx = Math.floor(vertices[4])
    const cy = Math.floor(vertices[5])

    const quadWidth = Math.abs(Math.floor(bx - ax))
    const quadHeight = Math.abs(Math.floor(cy - ay))

    let i, tx, ty, abX, abY, acX, acY
    let row = 0, col = 0, u, v, index
    
    for (i = (quadWidth * quadHeight) - 1; i >= 0; --i) {        
        tx = col / quadWidth
        ty = row / quadHeight

        if (tx <= 1 && ty <= 1) 
        { 
            abX = ax + tx * (bx - ax)
            abY = ay + tx * (by - ay)

            acX = ax + ty * (cx - ax)
            acY = ay + ty * (cy - ay)

            u = Math.floor((abX + acX) - ax)
            v = Math.floor((abY + acY) - ay)    

            if (u >= 0 && u < width && v >= 0 && v < height)
            {
                index = u + Math.floor(v * width)
                data[index] = texture[index]
            }
        }

        if (col >= quadWidth) {
            col = 0
            row++
        } else {
            col++
        }
    }
}