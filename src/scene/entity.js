import { vector3Zero } from "../core/math/vector/vector3.js";

export class Entity {
    constructor(position) {
        this.position = position || vector3Zero();
    }
}