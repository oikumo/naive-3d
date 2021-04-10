import { test, assert } from 'naive-tests';
import { Color } from '../../../../../src/core/colors/index.js';
import { Point2d } from '../../../../../src/core/geometry/primitives/points/point2d.js';
import { Textures } from '../../../../../src/core/textures/index.js';

test('point2d', () => {
    const point = new Point2d(1, 2);
    assert.equals(1, point.x);
    assert.equals(2, point.y);
});

test('point2d: clone', () => {
    const point = new Point2d(1, 2);
    const cloned = Point2d.clone(point);
    assert.equals(1, cloned.x);
    assert.equals(2, cloned.y);
    point.position[0] = 3;
    point.position[1] = 5;

    assert.equals(1, cloned.x);
    assert.equals(2, cloned.y);
    assert.equals(3, point.x);
    assert.equals(5, point.y);
});

test('point2d: clone list', () => {
    const points = [new Point2d(1, 2), new Point2d(3, 4)];
    const cloned = Point2d.cloneList(points);
    assert.equals(1, cloned[0].x);
    assert.equals(2, cloned[0].y);
    assert.equals(3, cloned[1].x);
    assert.equals(4, cloned[1].y);

    points[0].position[0] = 6;
    points[1].position[1] = 7;

    assert.equals(1, cloned[0].x);
    assert.equals(2, cloned[0].y);
    assert.equals(3, cloned[1].x);
    assert.equals(4, cloned[1].y);
});

test('point2d: get point orderer by x position asc', () => {
    const points = [new Point2d(3, 50), new Point2d(0, 1), new Point2d(5, 4)];
    const ordered = Point2d.getPointsOrderedByAsc(points);
    assert.equals(0, ordered[0].x);
    assert.equals(1, ordered[0].y);
    assert.equals(3, ordered[1].x);
    assert.equals(50, ordered[1].y);
    assert.equals(5, ordered[2].x);
    assert.equals(4, ordered[2].y);
});


test('point2d: translate', () => {
    const point = new Point2d(1, 2);
    Point2d.translate(point, 5, -6);
    assert.equals(6, point.x);
    assert.equals(-4, point.y);
});

test('point2d: translate', () => {
    const p1 = new Point2d(1, 2);
    const p2 = new Point2d(1, 3);
    const p3 = new Point2d(5, 3);
    assert.equals(true, Point2d.sameX(p1, p2));
    assert.equals(true, Point2d.sameX(p2, p1));
    assert.equals(false, Point2d.sameX(p1, p3));
});


test('point2d: delta', () => {
    const delta1 = Point2d.delta(new Point2d(1, 2), new Point2d(1, 2));
    const delta2 = Point2d.delta(new Point2d(1, 3), new Point2d(-1, 100));
    assert.sameArrayElementsOnly([0, 0], delta1.position);
    assert.sameArrayElementsOnly([2, -97], delta2.position);
});

test('point2d: distance', () => {
    const distance1 = Point2d.distance(new Point2d(1, 2), new Point2d(1, 2));
    const distance2 = Point2d.distance(new Point2d(1, 3), new Point2d(1, 100));
    assert.sameArrayElementsOnly(0, distance1);
    assert.sameArrayElementsOnly(97, distance2);
});

test('point2d: draw', () => {
    const point = new Point2d(10, 20);
    const tex = Textures.createTexture(50, 50, Color.blue);
    Point2d.draw(tex, point, Color.red);

    const found = [];
    let col = 0, row = 0;

    for (let i = 0; i < tex.pixels.length; i++) {
        if (tex.pixels[i] === Color.red) found.push([col, row]);
        if (col + 1 === tex.width) {
            col = 0;
            row++;
        } else {
            col++;
        }
    }

    assert.equals(1, found.length);
    assert.sameArrayElementsOnly([10, 20], found[0]);
});