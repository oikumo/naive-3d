import { Point2d } from "../points/point2d.js";

export class Triangle2d {
    constructor(a, b, c) {
        this.points = [a, b, c];
    }

    get a() { return this.points[0]; }

    get b() { return this.points[1]; }

    get c() { return this.points[2]; }

    static translate(triangle, dx, dy) {
        Point2d.translate(triangle.a, dx, dy);
        Point2d.translate(triangle.b, dx, dy);
        Point2d.translate(triangle.c, dx, dy);
    }

    static segmentParallelToYAxis(triangle) {
        return triangle.a.x === triangle.b.x ||
            triangle.b.x === triangle.c.x ||
            triangle.c.x === triangle.a.x;
    }
}