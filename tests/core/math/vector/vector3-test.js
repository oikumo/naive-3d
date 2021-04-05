import { test, assert } from 'naive-tests';
import { vector3, vector3Forward, vector3Left, vector3Right, vector3SetXY, vector3Zero } from '../../../../src/core/math/vector/vector3.js';

test('vector create', () => {
    assert.sameArrayElementsOnly([1.0, 0.0, 0.0], vector3(1, 0, 0));
    assert.sameArrayElementsOnly([0.0, 0.0, 1.0], vector3Forward());
    assert.sameArrayElementsOnly([1.0, 0.0, 0.0], vector3Left());
    assert.sameArrayElementsOnly([0.0, 1.0, 0.0], vector3Right());
    assert.sameArrayElementsOnly([0.0, 0.0, 0.0], vector3Zero());
});

test('vector set xy', () => {
    const v = vector3Zero();
    vector3SetXY(v, 1, 2);
    assert.sameArrayElementsOnly([1, 2, 0], v);
});

