import entities from "../engine/world/entities/entity-creator.js"

export function SceneEvents() {
    this.addEntitiesEvents = []
}

SceneEvents.prototype.addEntity = function (posX, posY) {
    this.addEntitiesEvents.push([posX, posY])
}

SceneEvents.prototype.apply = function (scene) {
    const events = this.addEntitiesEvents.length
    if (events !== undefined && events > 0) {
        let pos = 0
        for (let i = events - 1; i >= 0; --i) {
            pos = this.addEntitiesEvents[i]
            scene.addEntity(entities.createEntity(pos[0], pos[1]))
        }
        this.addEntitiesEvents = []
    }
}