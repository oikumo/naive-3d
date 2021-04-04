import { test, assert } from 'naive-tests';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { texture2bmp, bmp2texture } from '../../../src/core/images/images.js';
import { textures } from '../../../index.js';

const blue = parseInt(0xFFFF0000);
const green = parseInt(0xFF00FF00);
const red = parseInt(0xFF0000FF);
const white = parseInt(0xFFFFFFFF);

test('texture2bmp big texture', () => {
    const texture = new textures.createTexture(10000, 10000);
    texture.fill(() => parseInt(0xFF0000FF));
    const bmp = texture2bmp(texture);
    assert.notEquals(null, bmp);
    assert.notEquals(undefined, bmp);
});

test('bmp2texture', () => {
    const binFilePath = path.join(fileURLToPath(import.meta.url), '../../../../', 'tests-resources/engine/images/formats/bmp/file-image-bin.bmp')
    const binFile = fs.readFileSync(binFilePath);
    const texture = bmp2texture(binFile);
    const width = 2;
    const height = 2;
    assert.equals(width, texture.width);
    assert.equals(height, texture.height);
    assert.equals(width * height, texture.pixels.length);
    assert.equals(blue, texture.pixels[0]);
    assert.equals(green, texture.pixels[1]);
    assert.equals(red, texture.pixels[2]);
    assert.equals(white, texture.pixels[3]);
});