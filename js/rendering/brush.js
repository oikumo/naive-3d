export function drawLine2D (color, _p1, _p2, _q1, _q2, data, width) {
    const p1 = Math.ceil(_p1)
    const p2 = Math.ceil(_p2)
    const deltaQ1P1 = Math.ceil(_q1) - p1
    const deltaQ2P2 = Math.ceil(_q2) - p2
    const  n = Math.floor(Math.sqrt(Math.pow(deltaQ1P1, 2) + Math.pow(deltaQ2P2, 2)))
    
    let  i, x, t, y = 0
    for (i = 0; i < n; i++) {
        t = i / n
        x = Math.floor(p1 + (t * deltaQ1P1))
        if (x < 0 || x >= width) 
            continue

        y = p2 + Math.floor(t * deltaQ2P2)
        data[(y * width) + x] = color
    }
}

export function drawLine(colors, fromX, fromY, toX, toY, data, width) {
    const p1 = Math.ceil(fromX)
    const p2 = Math.ceil(fromY)
    const deltaQ1P1 = Math.ceil(toX) - p1
    const deltaQ2P2 = Math.ceil(toY) - p2
    const  n = Math.floor(Math.sqrt(Math.pow(deltaQ1P1, 2) + Math.pow(deltaQ2P2, 2)))
    
    let  i, x, t, y = 0
    for (i = 0; i < n; i++) {
        t = i / n
        x = Math.floor(p1 + (t * deltaQ1P1))
        if (x < 0 || x >= width) 
            continue

        y = p2 + Math.floor(t * deltaQ2P2)
        data[(y * width) + x] = colors[i]
    }
}