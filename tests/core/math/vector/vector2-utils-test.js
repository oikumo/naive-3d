import { test, assert } from 'naive-tests';
import { vector2lerp, vector2Scale, vector2Translate } from '../../../../src/core/math/vector/vector2-utils.js';
import { vector2, vector2Sub } from '../../../../src/core/math/vector/vector2.js';

test('vector2-utils - translate', () => {
    const v = vector2(1, 1);
    vector2Translate(v, 1, -30);
    assert.sameArrayElementsOnly([2, -29], v);
});

test('vector2-utils - lerp', () => {
    const v = vector2(2, 2);
    const target = vector2(4, 2);
    const result = vector2lerp(v, target, 0.5);
    assert.sameArrayElementsOnly([3, 2], result);
});

test('vector2-utils - scale', () => {
    const v = vector2(1, 2);
    vector2Scale(v, 2);
    assert.sameArrayElementsOnly([2, 4], v);
});

test('vector2-utils - substract', () => {
    const v1 = vector2(2, 3);
    const v2 = vector2(0.5, 1);
    const result = vector2Sub(v1, v2);
    assert.sameArrayElementsOnly([1.5, 2], result);
});