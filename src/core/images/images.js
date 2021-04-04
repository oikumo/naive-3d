import { textures } from '../../../index.js';
import { BMPCreator } from './formats/bmp/bmp.js';

const texture2bmp = (texture) => {
    return BMPCreator.fromTopRightTexAbgr(texture.pixels, texture.width, texture.height);
};

const bmp2texture = (imageBytes) => {
    const image = BMPCreator.fromImageBytes2TopRightImage(imageBytes);
    const texture = textures.createTexture(image.width, image.height);
    texture.pixels = image.pixels;
    return texture;
}

export {
    texture2bmp,
    bmp2texture
};