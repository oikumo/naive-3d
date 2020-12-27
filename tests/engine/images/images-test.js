import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { test, assertions } from 'naive-tests'
import { texture2bmp, bmp2texture } from '../../../engine/images/images.js'
import { Texture } from '../../../engine/rendering/textures/texture.js'

const { equals, notEquals } = assertions
const blue = parseInt(0xFFFF0000)
const green = parseInt(0xFF00FF00)
const red = parseInt(0xFF0000FF)
const white = parseInt(0xFFFFFFFF)

test('texture2bmp big texture', () => {
    const texture = new Texture(10000, 10000)
    texture.fill(() => parseInt(0xFF0000FF))
    const bmp = texture2bmp(texture)
    notEquals(null, bmp)
    notEquals(undefined, bmp)
})

test('bmp2texture', () => {
    const binFilePath = path.join(fileURLToPath(import.meta.url), '../../../../', 'tests-resources/engine/images/formats/bmp/file-image-bin.bmp')
    const binFile = fs.readFileSync(binFilePath)
    const texture = bmp2texture(binFile)
    const width = 2
    const height = 2
    equals(width, texture.width)
    equals(height, texture.height)
    equals(width * height, texture.pixels.length)
    equals(blue, texture.pixels[0])
    equals(green, texture.pixels[1])
    equals(red, texture.pixels[2])
    equals(white, texture.pixels[3])
})