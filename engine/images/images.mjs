import { BMPCreator } from './formats/bmp/bmp.mjs'

const texture2bmp = (texture) => {
    return BMPCreator.fromTopRightTexAbgr(texture.pixels, texture.width, texture.height)
}

export {
    texture2bmp
}