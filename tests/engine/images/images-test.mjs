import { test, assertions } from 'naive-tests'
import { texture2bmp } from '../../../engine/images/images.mjs'
import { Texture } from '../../../engine/rendering/textures/texture.mjs'

const { notEquals } = assertions

test('texture2bmp', () => {
    const texture = new Texture(100, 20)
    const bmp = texture2bmp(texture)
    notEquals(null, bmp)
    notEquals(undefined, bmp)
})