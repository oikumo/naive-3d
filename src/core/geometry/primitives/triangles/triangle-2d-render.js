import { Line2d } from "../line/line2d.js";
import { Point2d } from "../points/point2d.js";

export class RendererArc {
    constructor(pivot, upperVert, lowerVert) {
        this.pivot = pivot;
        this.upperVert = upperVert;
        this.lowerVert = lowerVert;
    }
}

export class Triangle2dRender {
    constructor(leftArc, rightArc) {
        this.leftArc = null;
        this.rightArc = null;
    }

    static createArc(extremePoint, candidate, other1, other2) {
        if (Point2d.equals(leftMost, triangle.a)) {
            return new RendererArc(
                triangle.a,
                new Line2d(triangle.a, triangle.b),
                new Line2d(triangle.a, triangle.c));
        }
    }

    static leftArc(triangle) {
        const pointsOrdered = Point2d.getPointsOrderedByAsc(triangle.points);
        const leftMost = pointsOrdered[0];

        if (Point2d.equals(leftMost, triangle.a)) {
            return new RendererArc(
                triangle.a,
                new Line2d(triangle.a, triangle.b),
                new Line2d(triangle.a, triangle.c));
        }
        if (Point2d.equals(leftMost, triangle.b)) {
            return new RendererArc(
                triangle.b,
                new Line2d(triangle.b, triangle.a),
                new Line2d(triangle.b, triangle.c));
        }
        if (Point2d.equals(leftMost, triangle.c)) {
            return new RendererArc(
                triangle.c,
                new Line2d(triangle.b, triangle.a),
                new Line2d(triangle.b, triangle.c));
        }
    }

    static create(triangle) {
        let arc = Triangle2dRender.createRendererArcIfSegmentParallelToY(triangle);
        if (arc) return new Triangle2dRender();

        return new Triangle2dRender();
    }

    static createRendererArcIfSegmentParallelToY(triangle) {
        if (Point2d.sameX(triangle.a, triangle.b)) {
            return new RendererArc(
                triangle.c,
                new Line2d(triangle.c, triangle.b),
                new Line2d(triangle.c, triangle.a));
        }
        if (Point2d.sameX(triangle.b, triangle.c)) {
            return new RendererArc(
                triangle.a,
                new Line2d(triangle.a, triangle.b),
                new Line2d(triangle.a, triangle.c));
        }
        if (Point2d.sameX(triangle.c, triangle.a)) {
            return new RendererArc(
                triangle.b,
                new Line2d(triangle.b, triangle.a),
                new Line2d(triangle.b, triangle.c));
        }
        return null;
    }
}