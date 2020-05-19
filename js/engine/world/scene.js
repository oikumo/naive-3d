import { Entity } from "../world/entity.mjs"
export function Scene() {
    this.entities = []
}
Scene.prototype.addEntity = function (entity) {
    this.entities.push(entity)
}