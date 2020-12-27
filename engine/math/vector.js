const moveTo = (from, to) => (t) => move(from, to, t)

const move = (from, to, t) => {
    return {
        x: from.x + t * (to.x - from.x),
        y: from.y + t * (to.y - from.y)
    }
}

export {
    moveTo
}