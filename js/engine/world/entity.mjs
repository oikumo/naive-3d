export function Entity(x, y, sprites) {
    this.center = {
        x: x,
        y: y
    }
    this.sprites = sprites
}

const move = function (from, to, t) {
    return {
        x: from.x + t * (to.x - from.x),
        y: from.y + t * (to.y - from.y)
    }
}

export const moveTo = (from, to) => (t) => move(from, to, t)