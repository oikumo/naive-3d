import { red } from "../../../../common/colors.js";
import { drawLine2D } from "../line/line2d.js";

export function Polygon2dWire(points, color) {
    this.points = points || [];
    this.color = color || red;
}

Polygon2dWire.prototype.draw = function (targetTex) {
    const pointsLength = this.points.length;
    if (pointsLength === 0) return;
    if (pointsLength === 1) {
        this.points[0].draw(targetTex);
    }
    for (let i = 1; i < pointsLength; i++) {
        drawLine2D(targetTex, this.points[i - 1], this.points[i], red);
    }

    drawLine2D(targetTex, this.points[pointsLength - 1], this.points[0], red);
}