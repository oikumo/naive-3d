import { assert, test } from 'naive-tests';
import { ColorRandomizer } from '../../../src/core/colors/colorRandomizer.js';

test('color randomizer - single value', () => {
    const color1 = new ColorRandomizer().random();
    const color2 = new ColorRandomizer().random();
    assert.notEquals(color1, color2);
});