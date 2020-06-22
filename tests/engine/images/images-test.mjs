import { test, assertions } from 'naive-tests'
import { texture2bmp } from '../../../engine/images/images.mjs'
import { Texture } from '../../../engine/rendering/textures/texture.mjs'

const { notEquals } = assertions

test('texture2bmp', () => {
    const texture = new Texture(2, 4)
    texture.fill(() => parseInt(0xFF0000FF))
    texture.pixels[0] = 0xFFFF0000
    texture.pixels[3] = 0xFF00FF00
    const bmp = texture2bmp(texture)
    notEquals(null, bmp)
    notEquals(undefined, bmp)
})