import { assert, test } from 'naive-tests';
import { UiComponent, UiRect } from '../../../index.js';

test('create ui component', () => {
    const backgroundColor = 0xFF555555;
    const rect = new UiRect({ x: 0, y: 0 }, 20, 35);
    const component = new UiComponent(rect, backgroundColor);
    assert.equals(component.backgroundColor(), backgroundColor);
    assert.objAreEquals(component.rect, {
        width: 20,
        height: 35,
        topLeft: { x: 0, y: 0 },
        bottomRight: { x: 20, y: 35 }
    }, 'component rect has not expected values');
});

test('draw ui component using decimal numbers for rect', () => {
    const rect = new UiRect({ x: 0, y: 0.1 }, 2.1, 4);
    assert.equals(rect.width, 2.1);
    assert.equals(rect.height, 4);
    const backgroundColor = 0xFF555555;
    const component = new UiComponent(rect, backgroundColor);

    const pixelsWidth = 6;
    const pixelsHeight = 7;
    const pixelsSize = pixelsWidth * pixelsHeight;
    const pixels = new Uint32Array(pixelsSize);

    component.draw(pixels, pixelsWidth);

    let paintedPixels = 0;
    let col = 0;
    let row = 0;

    const flooredRect = UiRect.floor(component.rect);

    for (let i = 0; i < pixelsSize; i++) {
        if (flooredRect.inside({ x: col, y: row })) {
            assert.equals(pixels[i], backgroundColor, `pixel color doesn't match at: [${col}, ${row}]`);
            paintedPixels++;
        }
        else {
            assert.equals(pixels[i], 0);
        }

        if (col + 1 == pixelsWidth) {
            col = 0;
            row++;
        }
        else {
            col++;
        }
    }

    const componenentSize = flooredRect.width * flooredRect.height;
    assert.equals(paintedPixels, componenentSize, `requieColor.red pixels wasn't painted`);
});