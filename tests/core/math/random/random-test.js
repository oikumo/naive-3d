import { test, assert } from 'naive-tests';
import { Random } from '../../../../src/core/math/random/random.js';

test("create UUID", () => {
    const values = new Set();

    for (let i = 0; i < 10; i++) {
        const uuid = Random.createUUID();
        assert.equals(false, values.has(uuid));
        assert.equals(36, uuid.length);
        values.add(uuid);
    }
})
