import { test, assert } from 'naive-tests';
import { Line2d } from '../../../../../src/core/geometry/primitives/line/line2d.js';
import { Point2d } from '../../../../../src/core/geometry/primitives/points/point2d.js';
import { Triangle2dRender } from '../../../../../src/core/geometry/primitives/triangles/triangle-2d-render.js';
import { Triangle2d } from '../../../../../src/core/geometry/primitives/triangles/triangle-2d.js';

test('triangle 2d render - create', () => {
    const a = new Point2d(0, 0), b = new Point2d(0, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);

    const triangleRenderer = Triangle2dRender.create(triangle);
    const leftArc = triangleRenderer.leftArc;
    //equals(true, Point2d.equals(c, leftArc.pivot));

});

test('triangle 2d render - get left point', () => {
    const a = new Point2d(0, 0), b = new Point2d(5, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);

    //const leftPoint = Triangle2dRender.getLeftPoint(triangle);
    //equals(true, Point2d.equals(leftPoint, a));

});

test('triangle 2d render - create render arc', () => {
    const a = new Point2d(0, 0), b = new Point2d(0, 10), c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);

    const arc = Triangle2dRender.createRendererArcIfSegmentParallelToY(triangle);
    assert.equals(true, Point2d.equals(arc.pivot, c));
    assert.equals(true, Line2d.equals(arc.upperVert, new Line2d(c, b)));
    assert.equals(true, Line2d.equals(arc.lowerVert, new Line2d(c, a)));
});

test('triangle 2d render - create render arc - null if not segment is not parallel to y axis', () => {
    const a = new Point2d(0, 0), b = new Point2d(5, 10), c = new Point2d(20, 0);
    const triangleNotParallel = new Triangle2d(a, b, c);
    const arcNull = Triangle2dRender.createRendererArcIfSegmentParallelToY(triangleNotParallel);
    assert.equals(true, arcNull === null);
});