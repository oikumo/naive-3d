import { test, assert } from 'naive-tests';
import { Line2d } from '../../../../../src/core/geometry/primitives/line/line2d.js';
import { Point2d } from '../../../../../src/core/geometry/primitives/points/point2d.js';

test('line 2d - create', () => {
    const line = new Line2d(new Point2d(1, 0), new Point2d(1, 10));
    assert.equals(true, Point2d.equals(line.a, new Point2d(1, 0)));
    assert.equals(true, Point2d.equals(line.b, new Point2d(1, 10)));
});

test('line 2d - equals', () => {
    const line1 = new Line2d(new Point2d(1, 0), new Point2d(1, 10));
    const line2 = new Line2d(new Point2d(-5.1, 1), new Point2d(15, 20));

    assert.equals(true, Line2d.equals(line1, line1));
    assert.equals(false, Line2d.equals(line1, line2));
});

test('line 2d - slope x=y', () => {
    const line = new Line2d(new Point2d(1, 1), new Point2d(10, 10));
    assert.equals(1, line.slope());
});

test('line 2d - slope parallel to x axis', () => {
    const line = new Line2d(new Point2d(1, 0), new Point2d(10, 0));
    assert.equals(0, line.slope());
});

test('line 2d - slope parallel to y axis, infinity (undefined)', () => {
    const line = new Line2d(new Point2d(1, 0), new Point2d(1, 10));
    assert.equals(null, line.slope());
});

test('line 2d - get X at Y - line x=y', () => {
    const line = new Line2d(new Point2d(0, 0), new Point2d(1, 1));
    assert.equals(0.5, line.getXfromY(0.5));
    assert.equals(21, line.getXfromY(21));
});

test('line 2d - is penpendicular to x axis', () => {
    const line = new Line2d(new Point2d(1, 0), new Point2d(1, 10));
    assert.equals(true, line.isPerpendicularToXAxis());
});