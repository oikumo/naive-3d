import { Entity } from "./entity.js";

export class Scene {
    constructor() {
        this.id = 0;
        this.entities = new Set();
    }

    addEntity(entity) {
        if (!(entity instanceof Entity)) {
            return null;
        }

        this.entities.add(entity);
        return entity;
    }
}