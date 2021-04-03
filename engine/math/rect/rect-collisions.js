import { inRect } from './rect.js'

const rectInOther = (rect1, rect2) => {
    const collisions = []

    if (inRect(rect1.topLeft, rect2))
        collisions.push(rect1.topLeft)

    if (inRect(rect1.topRight, rect2))
        collisions.push(rect1.topRight)

    if (inRect(rect1.bottomLeft, rect2))
        collisions.push(rect1.bottomLeft)

    if (inRect(rect1.bottomRight, rect2))
        collisions.push(rect1.bottomRight)

    return collisions
}

export {
    rectInOther
}