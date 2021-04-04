import { vector2Distance, vector2lerp, vector2Translate } from "../../../../common/math/vector/vector2-utils.js";
import { vector2, vector2AreEquals, vector2Sub } from "../../../../common/math/vector/vector2.js";

export class Point2d {
    constructor(x, y) {
        this.position = vector2(x, y);
    }

    get x() {
        return this.position[0];
    }

    get y() {
        return this.position[1];
    }

    static getPointsOrderedByAsc(points) {
        const cloned = Point2d.cloneList(points);
        cloned.sort((a, b) => { return a.x - b.x; });
        return cloned;
    }

    static translate(point, dx, dy) {
        vector2Translate(point.position, dx, dy);
    }

    static fromVector2(vector2) {
        return new Point2d(vector2[0], vector2[1]);
    }

    static clone(point) {
        return new Point2d(point.x, point.y);
    }

    static cloneList(points) {
        if (!points) return [];
        const cloned = new Array(points.length);
        for (let i = points.length - 1; i >= 0; --i) {
            cloned[i] = Point2d.clone(points[i]);

        }
        return cloned;
    }

    static sameX(a, b) {
        return a.x === b.x;
    }

    static draw(tex, point, color) {
        const x = Math.floor(point.x);
        if (x < 0 || x >= tex.width)
            return;

        const y = Math.floor(point.y);
        if (y < 0 || y >= tex.height)
            return;

        tex.pixels[Math.floor(y * tex.width) + x] = color;
    }

    static delta(a, b) {
        return Point2d.fromVector2(vector2Sub(a.position, b.position));
    }

    static distance(a, b) {
        return vector2Distance(a.position, b.position);
    }

    static lerp(a, b, t) {
        return Point2d.fromVector2(vector2lerp(a.position, b.position, t));
    }

    static equals(p, q) {
        return vector2AreEquals(p.position, q.position);
    }
}