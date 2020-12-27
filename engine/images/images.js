import { Texture } from '../rendering/textures/texture.js'
import { BMPCreator } from './formats/bmp/bmp.js'

const texture2bmp = (texture) => {
    return BMPCreator.fromTopRightTexAbgr(texture.pixels, texture.width, texture.height)
}

const bmp2texture = (imageBytes) => {
    const image = BMPCreator.fromImageBytes2TopRightImage(imageBytes)
    const texture = new Texture(image.width, image.height)
    texture.pixels = image.pixels
    return texture
}

export {
    texture2bmp,
    bmp2texture
}