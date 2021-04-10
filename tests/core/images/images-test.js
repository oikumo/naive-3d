import { test, assert } from 'naive-tests';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Textures } from '../../../index.js';
import { Color } from '../../../index.js';
import { Image } from '../../../src/core/images/image.js';

test('texture2bmp big texture', () => {
    const texture = Textures.createTexture(1000, 1000);
    texture.fill(() => parseInt(0xFF0000FF));
    const bmp = Image.texture2bmp(texture);
    assert.notEquals(null, bmp);
    assert.notEquals(undefined, bmp);
});

test('bmp2texture', () => {
    const binFilePath = path.join(fileURLToPath(import.meta.url), '../../../../', 'tests-resources/engine/images/formats/bmp/file-image-bin.bmp');
    const binFile = fs.readFileSync(binFilePath);
    const texture = Image.bmp2texture(binFile);
    const width = 2;
    const height = 2;
    assert.equals(width, texture.width);
    assert.equals(height, texture.height);
    assert.equals(width * height, texture.pixels.length);
    assert.equals(Color.blue, texture.pixels[0]);
    assert.equals(Color.green, texture.pixels[1]);
    assert.equals(Color.red, texture.pixels[2]);
    assert.equals(Color.white, texture.pixels[3]);
});