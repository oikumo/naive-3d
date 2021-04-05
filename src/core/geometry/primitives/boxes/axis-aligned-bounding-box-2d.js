import { Point2d } from "../points/point2d.js";

export class AxisAlignedBoundingBox2d {
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }

    center() {
        const centerX = this.topLeft.x + (this.width / 2);
        const centerY = this.bottomRight.y + (this.height / 2);
        return new Point2d(centerX, centerY);
    }

    get width() {
        return this.bottomRight.x - this.topLeft.x;
    }

    get height() {
        return this.topLeft.y - this.bottomRight.y;
    }

    size() {
        return this.width * this.height;
    }

    dimension() {
        const width = this.width;
        const height = this.height;
        return [width, height];
    }

    static createFromPoints2d(points) {
        let minX = Number.MAX_SAFE_INTEGER;
        let minY = Number.MAX_SAFE_INTEGER;
        let maxX = Number.MIN_SAFE_INTEGER;
        let maxY = Number.MIN_SAFE_INTEGER;

        for (let { position } of points) {
            if (position[0] < minX) {
                minX = position[0];
            }
            if (position[1] < minY) {
                minY = position[1];
            }
            if (position[0] >= maxX) {
                maxX = position[0];
            }
            if (position[1] >= maxY) {
                maxY = position[1];
            }
        }

        let topLeft = new Point2d(minX, maxY);
        let bottomRight = new Point2d(maxX, minY);
        const boundingBox = new AxisAlignedBoundingBox2d(topLeft, bottomRight);

        return boundingBox;
    }

    static areEquals(bb1, bb2) {
        return Point2d.equals(bb1.topLeft, bb2.topLeft) &&
            Point2d.equals(bb1.bottomRight, bb2.bottomRight);
    }
}