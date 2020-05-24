export function renderEntities(scene, renderTex, width, height) {
    const entities = scene.entities
    const data = renderTex

    for (let i = entities.length - 1; i >= 0; --i) {
        const sprites = entities[i].sprites

        for (let sp = sprites.length - 1; sp >= 0; --sp) {
            const sprite = sprites[sp]
            const texHeight = sprite.texture.height
            const centerX = sprite.center.x
            const centerY = sprite.center.y
            let col = 0, row = 0, x = 0, y = 0
            const len = sprite.texture.pixels.length
            const pixels = sprite.texture.pixels

            for (let j = len - 1; j >= 0; --j) {
                x = Math.floor(centerX + row)
                y = centerY + col

                if (x >= 0 && x < width && y >= 0 && y < height)
                    data[x + Math.floor(y * width)] = pixels[j]

                if (col + 1 == texHeight) {
                    col = 0
                    row++
                } else {
                    col++
                }
            }
        }
    }
}