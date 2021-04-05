import { test, assert } from 'naive-tests';
import { Point2d } from '../../../../../src/core/geometry/primitives/points/point2d.js';
import { Quad2d } from '../../../../../src/core/geometry/primitives/quads/quad-2d.js';

test('quad 2d - create', () => {
    const quad = new Quad2d([
        new Point2d(20, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50),
    ]);
    assert.equals(true, Point2d.equals(quad.ab.a, new Point2d(20, 20)));
    assert.equals(true, Point2d.equals(quad.ab.b, new Point2d(30, 10)));
    assert.equals(true, Point2d.equals(quad.bc.a, new Point2d(30, 10)));
    assert.equals(true, Point2d.equals(quad.bc.b, new Point2d(40, 30)));
    assert.equals(true, Point2d.equals(quad.cd.a, new Point2d(40, 30)));
    assert.equals(true, Point2d.equals(quad.cd.b, new Point2d(30, 50)));
    assert.equals(true, Point2d.equals(quad.da.a, new Point2d(30, 50)));
    assert.equals(true, Point2d.equals(quad.da.b, new Point2d(20, 20)));
});

test('quad 2d - calculate bounding box', () => {
    const quad = new Quad2d([
        new Point2d(20, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50),
    ]);
    const box = quad.calculateBoundingBox();
    assert.equals(true, Point2d.equals(box.topLeft, new Point2d(20, 50)));
    assert.equals(true, Point2d.equals(box.bottomRight, new Point2d(40, 10)));
});