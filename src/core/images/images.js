import { textures } from '../../../index.js';
import { BMPCreator } from './formats/bmp/bmp.js';

export function texture2bmp(texture) {
    return BMPCreator.fromTopRightTexAbgr(texture.pixels, texture.width, texture.height);
}

export function bmp2texture(imageBytes) {
    const image = BMPCreator.fromImageBytes2TopRightImage(imageBytes);
    const texture = textures.createTexture(image.width, image.height);
    texture.pixels = image.pixels;
    return texture;
}