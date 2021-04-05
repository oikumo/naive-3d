import { test, assert } from 'naive-tests';
import { vector2, vector2AreEquals, vector2Left, vector2Right, vector2Sub, vector2Zero } from '../../../../src/core/math/vector/vector2.js';

test('vector2d', () => {
    const v = vector2(10, 0);
    assert.equals(10, v[0]);
    assert.equals(0, v[1]);

    const left = vector2Left();
    assert.equals(1, left[0]);
    assert.equals(0, left[1]);

    const right = vector2Right();
    assert.equals(0, right[0]);
    assert.equals(1, right[1]);

    const zero = vector2Zero();
    assert.equals(0, zero[0]);
    assert.equals(0, zero[1]);

    const sub = vector2Sub(vector2(0, 10), vector2(20, -3));
    assert.equals(-20, sub[0]);
    assert.equals(13, sub[1]);

    const a = vector2(1, 2);
    const b = vector2(2, 100);
    assert.equals(true, vector2AreEquals(a, a));
    assert.equals(false, vector2AreEquals(a, b));
});