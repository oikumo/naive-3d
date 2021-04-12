import { Point2d } from "../../../core/geometry/primitives/points/point2d.js";

export class Entity2d {
    constructor(avatar) {
        this.position = new Point2d();
        this.direction = new Point2d(1, 0);
        this.avatar = avatar;
    }
}