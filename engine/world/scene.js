import { Entity } from "../world/entity.js"
export function Scene() {
    this.entities = []
}
Scene.prototype.addEntity = function (entity) {
    this.entities.push(entity)
}