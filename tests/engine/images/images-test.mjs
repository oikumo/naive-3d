import { test, assertions } from 'naive-tests'
import { texture2bmp } from '../../../engine/images/images.mjs'
import { Texture } from '../../../engine/rendering/textures/texture.mjs'

const { notEquals } = assertions

test('texture2bmp big texture', () => {
    const texture = new Texture(10000, 10000)
    texture.fill(() => parseInt(0xFF0000FF))
    const bmp = texture2bmp(texture)
    notEquals(null, bmp)
    notEquals(undefined, bmp)
})