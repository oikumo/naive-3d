import { test, assert } from 'naive-tests';
import { AxisAlignedBoundingBox2d } from '../../../../../src/core/geometry/primitives/boxes/axis-aligned-bounding-box-2d.js';
import { Point2d } from '../../../../../src/core/geometry/primitives/points/point2d.js';

test('axis aligned bounding box 2d - create', () => {
    const points = [
        new Point2d(20, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50)
    ];

    const box = AxisAlignedBoundingBox2d.createFromPoints2d(points);
    assert.equals(true, Point2d.equals(box.topLeft, new Point2d(20, 50)));
    assert.equals(true, Point2d.equals(box.bottomRight, new Point2d(40, 10)));
});

test('axis aligned bounding box 2d - center', () => {
    const points = [
        new Point2d(20, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50)
    ];

    const center = AxisAlignedBoundingBox2d.createFromPoints2d(points).center();
    assert.equals(true, Point2d.equals(center, new Point2d(30, 30)));
});


test('axis aligned bounding box 2d - are equals', () => {
    const points1 = [
        new Point2d(20, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50)
    ];
    const points2 = [
        new Point2d(20, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50)
    ];

    const bb1 = AxisAlignedBoundingBox2d.createFromPoints2d(points1);
    const bb2 = AxisAlignedBoundingBox2d.createFromPoints2d(points2);
    assert.equals(true, AxisAlignedBoundingBox2d.areEquals(bb1, bb2));

    const points3 = [
        new Point2d(1, 20), new Point2d(30, 10),
        new Point2d(40, 30), new Point2d(30, 50)
    ];

    const bb3 = AxisAlignedBoundingBox2d.createFromPoints2d(points3);
    assert.equals(false, AxisAlignedBoundingBox2d.areEquals(bb1, bb3));
});