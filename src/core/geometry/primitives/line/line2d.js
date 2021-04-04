import { Point2d } from "../points/point2d.js";

export class Line2d {
    constructor(a, b) {
        this.a = a || new Point2d();
        this.b = b || new Point2d();
    }

    isPerpendicularToXAxis() {
        return this.a.position[0] - this.b.position[0] === 0;
    }

    slope() {
        if (this.isPerpendicularToXAxis()) return null;
        const delta = Point2d.delta(this.b, this.a);
        return delta.y / delta.x;
    }

    getXfromY(y) {
        const slope = this.slope();
        if (!slope) return null;
        return this.a.position[0] + ((y - this.a.position[1]) / slope);
    }

    static equals(line1, line2) {
        return Point2d.equals(line1.a, line2.a) && Point2d.equals(line1.b, line2.b);
    }

    static draw(tex, p, q, color) {
        const delta = Point2d.delta(q, p);
        const n = Math.max(Math.abs(delta[0]), Math.abs(delta[1]));
        let i, t, x, y;

        for (i = n - 1; i >= 0; --i) {
            t = i / n

            x = Math.floor(p.position[0] + (t * delta[0]))
            if (x < 0 || x >= tex.width)
                continue

            y = p.position[1] + Math.floor(t * delta[1])
            if (y < 0 || y >= tex.height)
                continue

            tex.pixels[Math.floor(y * tex.width) + x] = color
        }
    }
}