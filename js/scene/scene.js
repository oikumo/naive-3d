export class Scene {
    constructor(core) {
        this.core = core
    }
    addEntity(x, y, color) {
        this.core.addTriangle(x,y, color)
        this.core.addCube()
    }
    addSprite(sprite) {
        this.core.addSprite(sprite)
    }
}