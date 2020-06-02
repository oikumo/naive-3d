const createRectFromCenter = (center, width, height) => {
    const topLeft = {
        x: center.x - width / 2,
        y: center.y + height / 2
    }
    const bottomRight = {
        x: center.x + width / 2,
        y: center.y - height / 2
    }
    return new Rect(center, width, height, topLeft, bottomRight)
}

const createRectFromCorners = (topLeft, bottomRight) => {
    const width = bottomRight.x - topLeft.x
    const height = topLeft.y - bottomRight.y
    const center = {
        x: topLeft.x + width / 2,
        y: bottomRight.y + height / 2
    }
    return new Rect(center, width, height, topLeft, bottomRight)
}

const Rect = function (center, width, height, topLeft, bottomRight) {
    this.center = center
    this.width = width
    this.height = height
    this.topLeft = topLeft
    this.topRight = { x: bottomRight.x, y: topLeft.y }
    this.bottomLeft = { x: topLeft.x, y: bottomRight.y }
    this.bottomRight = bottomRight
}

const inRect = (point, rect) =>
    point.y >= rect.bottomRight.y
    && point.y <= rect.topLeft.y
    && point.x >= rect.topLeft.x
    && point.x <= rect.bottomRight.x

export {
    createRectFromCenter,
    createRectFromCorners,
    inRect
}