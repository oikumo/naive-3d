import { AxisAlignedBoundingBox2d } from "../boxes/axis-aligned-bounding-box-2d.js";
import { Line2d } from "../line/line2d.js";

export class Quad2d {
    constructor(points) {
        this.points = points;
        this.ab = new Line2d(points[0], points[1]);
        this.bc = new Line2d(points[1], points[2]);
        this.cd = new Line2d(points[2], points[3]);
        this.da = new Line2d(points[3], points[0]);
    }

    calculateBoundingBox() {
        return AxisAlignedBoundingBox2d.createFromPoints2d(this.points);
    }
}