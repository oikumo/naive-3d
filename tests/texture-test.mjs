import { equals, test } from 'naive-tests'
import { Texture } from '../js/engine/rendering/textures/texture.mjs'

test('fill a squared texture with a solid color', () => {
    const tex = new Texture(10, 10)
    const white = parseInt(0x00000000)
    const red = parseInt(0xFF0000FF)

    tex.pixels.forEach((pixel) => equals(pixel, white))
    tex.fill(() => red)
    tex.pixels.forEach((pixel) => equals(pixel, red))
})

test('fill a rectangular texture with lines', () => {
    const tex = new Texture(3, 5)
    const white = parseInt(0x00000000)
    const red = parseInt(0xFF0000FF)

    tex.pixels.forEach((pixel) => equals(pixel, white))
    tex.fill((_, row) => row % 2 === 0 ? white : red)

    const expected = new Array(15)
        .fill(white, 0, 3)
        .fill(red, 3, 6)
        .fill(white, 6, 9)
        .fill(red, 9, 12)
        .fill(white, 12, 15)

    tex.pixels.forEach((pixel, i) => {
        equals(pixel, expected[i])
    })
})