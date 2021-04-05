import { Point2d } from "../points/point2d.js";

export class Quad2dScanline {
    constructor() {
        this.beginHeight = 0;
        this.endHeight = 0;
        this.beginX = 0;
        this.endX = 0;
        this.quadScanLineSize = 0;
        this.beginLine = null;
        this.endLine = null;
        this.beginLineT = 0;
        this.endLineT = 0;
        this.reversedProjection = false;
    }

    scan(quad, y) {
        this.beginHeight = quad.ab.a.position[1];

        if (y <= this.beginHeight) {
            this.beginLine = quad.ab;
        } else {
            this.beginLine = quad.da;
        }

        this.endHeight = quad.bc.b.position[1];

        if (y <= this.endHeight) {
            this.endLine = quad.bc;
            this.reversedProjection = false;
        } else {
            this.endLine = quad.cd;
            this.reversedProjection = true;
        }

        this.beginX = Math.floor(this.beginLine.getXfromY(y));
        this.endX = Math.floor(this.endLine.getXfromY(y));
        this.quadScanLineSize = this.endX - this.beginX;

        this.beginLineT = this.getTinLine(this.beginLine, new Point2d(this.beginX, y));
        this.endLineT = this.getTinLine(this.endLine, new Point2d(this.endX, y));
    }

    getTinLine(line, point) {
        const distance2 = Point2d.distance(line.b, line.a);
        if (distance2 === 0) return 0;

        const distance1 = Point2d.distance(point, line.a);
        return distance1 / distance2;
    }
}
