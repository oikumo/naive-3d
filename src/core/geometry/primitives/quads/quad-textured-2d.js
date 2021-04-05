import { Line2d } from "../line/line2d.js";
import { Point2d } from "../points/point2d.js";
import { Quad2dScanline } from "./quad-2d-scanline.js";

export class QuadTextured2d {
    constructor(quad, tex) {
        this.quad = quad;
        this.tex = tex;
    }

    draw(targetTex) {
        const pointsLength = this.quad.points.length;
        if (pointsLength === 0) return;
        if (pointsLength === 1) {
            this.quad.points[0].draw(targetTex);
        }

        const points = this.quad.points;

        for (let i = 1; i < pointsLength; i++) {
            Line2d.draw(targetTex, points[i - 1], points[i], green);
        }

        Line2d.draw(targetTex, points[pointsLength - 1], points[0], green);
    }

    drawTextured(targetTex) {
        const box = this.quad.calculateBoundingBox();
        const [boxWidth, boxHeight] = box.dimension();
        const boxSize = box.size();
        let [dx, dy] = box.topLeft.position;

        let col = 0;
        let row = 0;

        const quadScanline = new Quad2dScanline();
        quadScanline.scan(this.quad, row + dy);
        let color;

        let pIndex = 0;
        for (let i = 0; i < boxSize; i++) {

            if (quadScanline.beginX < col + dx && quadScanline.endX > col + dx) {
                let rPrimaX = quadScanline.beginLineT * this.tex.width;
                let sPrimaY = quadScanline.endLineT * this.tex.height;

                let rP = new Point2d(rPrimaX, 0);
                let sP = new Point2d(this.tex.width, sPrimaY);

                let tP = (pIndex) / quadScanline.quadScanLineSize;
                let p = Point2d.lerp(rP, sP, tP);

                const u = Math.ceil(p.position[0]);
                const v = Math.floor(p.position[1]);

                color = this.tex.pixels[u + (this.tex.width * v)];
                targetTex.pixels[Math.ceil(dx + col) + Math.ceil(dy + row) * targetTex.width] = color;

                pIndex++;
            }

            if (col + 1 == boxWidth) {
                col = 0;
                row++;
                quadScanline.scan(this.quad, row + dy);
                pIndex = 0;
            }
            else {
                col++;
            }
        }
    }
}