import { test, assert } from 'naive-tests';
import { vector3lerp, vector3Scale, vector3Sub, vector3Translate } from '../../../../src/core/math/vector/vector3-utils.js';
import { vector3, vector3Zero } from '../../../../src/core/math/vector/vector3.js';

test('vector3-utils translate', () => {
    const v = vector3Zero();
    const delta = vector3(1, 0, 1);
    vector3Translate(v, delta);
    assert.sameArrayElementsOnly([1, 0.0, 1], v);
});

test('vector-utils vector3lerp', () => {
    const v = vector3Zero();
    const target = vector3(1, 1, 1);
    vector3lerp(v, target, 1);
    assert.sameArrayElementsOnly([1, 1, 1], v);
});

test('vector-utils vector3Scale', () => {
    const v = vector3(1, 1, 1);
    vector3Scale(v, 2);
    assert.sameArrayElementsOnly([2.0, 2.0, 2.0], v);
});

test('vector-utils vector3Sub', () => {
    const v = vector3(2, 3, 4);
    const v2 = vector3(1, 1, 2);
    const result = vector3Sub(v2, v);
    assert.sameArrayElementsOnly([-1, -2, -2], result);
});