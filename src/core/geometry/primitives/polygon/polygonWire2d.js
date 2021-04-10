import { Color } from "../../../colors/index.js";
import { drawLine2D } from "../line/line2d.js";

export class Polygon2dWire {
    constructor(points, color) {
        this.points = points || [];
        this.color = color || Color.red;
    }

    draw(targetTex) {
        const pointsLength = this.points.length;
        if (pointsLength === 0) return;
        if (pointsLength === 1) {
            this.points[0].draw(targetTex);
        }
        for (let i = 1; i < pointsLength; i++) {
            drawLine2D(targetTex, this.points[i - 1], this.points[i], Color.red);
        }

        drawLine2D(targetTex, this.points[pointsLength - 1], this.points[0], Color.red);
    }
}