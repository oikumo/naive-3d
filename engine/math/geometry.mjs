const Rect = function (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.topLeft = {
        x: this.x - this.width / 2,
        y: this.y + this.height / 2
    }
    this.bottomRight = {
        x: this.x + this.width / 2,
        y: this.y - this.height / 2
    }
}

const rectPointsInOther = (rect1, rect2) => {
    const collisions = []

    if (inRect(rect1.topLeft, rect2))
        collisions.push(rect1.topLeft)

    const topRight = { x: rect1.bottomRight.x, y: rect1.topLeft.y }
    if (inRect(topRight, rect2))
        collisions.push(topRight)

    const bottomLeft = { x: rect1.topLeft.x, y: rect1.bottomRight.y }
    if (inRect(bottomLeft, rect2))
        collisions.push(bottomLeft)

    if (inRect(rect1.bottomRight, rect2))
        collisions.push(rect1.bottomRight)

    return collisions
}

const inRect = (point, rect) =>
    point.y >= rect.bottomRight.y
    && point.y <= rect.topLeft.y
    && point.x >= rect.topLeft.x
    && point.x <= rect.bottomRight.x

export {
    rectPointsInOther,
    Rect
}