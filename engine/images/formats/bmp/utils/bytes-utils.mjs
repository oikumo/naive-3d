const reversed4bytes = (number) => new Uint8Array([
    255 & number >> 0,
    255 & number >> 8,
    255 & number >> 16,
    255 & number >> 24
])

const reversed2bytes = (number) => new Uint8Array([
    255 & number >> 0,
    255 & number >> 8
])

const as2bytes = (number) => new Uint8Array([
    255 & number >> 8,
    255 & number >> 0
])

const abgr2bgr = (abgrColor) => {
    let bgrColor = 0
    bgrColor |= ((255) & (abgrColor >> 0))
    bgrColor |= ((255) & (abgrColor >> 8)) << 8
    bgrColor |= ((255) & (abgrColor >> 16)) << 16
    return bgrColor
}

const hex2bin = (hex) => {
    if (!hex) return new Uint8Array()
    const arr = []
    for (let i = 0, len = hex.length; i < len; i += 2) {
        arr.push(parseInt(hex.substr(i, 2), 16))
    }
    return new Uint8Array(arr)
}

const createBufferUint8 = (...items) => {
    let size = 0
    items.forEach(item => size += item.length)
    const arr = new Uint8Array(size)

    let offset = 0
    const itemsLength = items.length

    for (let i = 0; i < itemsLength; i++) {
        const item = items[i]
        arr.set(item, offset)
        offset += item.length
    }

    return arr
}

export {
    reversed4bytes,
    reversed2bytes,
    as2bytes,
    abgr2bgr,
    hex2bin,
    createBufferUint8
}