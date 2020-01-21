export function World(scene) {
    this.scene = scene
}

World.prototype.update = function (data, width, height) {
    this.scene.update(data, width, height)
}