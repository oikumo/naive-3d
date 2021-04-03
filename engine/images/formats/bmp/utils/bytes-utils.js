const reversed4bytes = (number) => new Uint8Array([
    255 & number >> 0,
    255 & number >> 8,
    255 & number >> 16,
    255 & number >> 24
])

const unreversebytes = (bytes) => {
    let number = 0
    let shift = 0
    let len = bytes.length
    for (let i = 0; i < len; i++) {
        number |= bytes[i] << 8 * shift++
    }
    return number
}

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

const ColorConverter = function () {
    const buf = new ArrayBuffer(4)
    this.abgr = new Uint32Array(buf)
}

ColorConverter.prototype.bgrBytes2abgr = function (bgr) {
    this.abgr[0] = bgr[2] << 0
        | bgr[1] << 8
        | bgr[0] << 16
        | 255 << 24
    return this.abgr[0]
}

ColorConverter.prototype.bgr2abgr = function (bgr) {
    this.abgr[0] = ((255) & (bgr >> 0))
        | ((255) & (bgr >> 8)) << 8
        | ((255) & (bgr >> 16)) << 16
        | (255) << 24
    return this.abgr[0]
}

const bgr2abgr = (bgr) => {
    const buf = new ArrayBuffer(4)
    const abgr = new Uint32Array(buf)
    abgr[0] |= ((255) & (bgr >> 0))
    abgr[0] |= ((255) & (bgr >> 8)) << 8
    abgr[0] |= ((255) & (bgr >> 16)) << 16
    abgr[0] |= (255) << 24
    return abgr[0]
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
    unreversebytes,
    as2bytes,
    abgr2bgr,
    ColorConverter,
    bgr2abgr,
    hex2bin,
    createBufferUint8
}