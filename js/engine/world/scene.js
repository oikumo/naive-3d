import { Entity } from "../world/entity.js"
import { Pallete } from "../rendering/colors/pallete.js"
import { TextureFactory } from "../rendering/textures/textureFactory.js"
import { Sprite } from "../rendering/geometry/sprite.js"

const pallete = new Pallete();
const textureRed = new TextureFactory(200, 200).checker(pallete.color[0], pallete.color[4], 10, 10);
const textureGreen = new TextureFactory(200, 200).checker(pallete.color[4], pallete.color[2], 10, 10);

const textureMap = {
    red: textureRed,
    green: textureGreen
}

export function Scene() {
    this.entities = []
}

Scene.prototype.update = function (data, width, height) {
    this.drawSprites(data, width, height)
}

Scene.prototype.addEntity = function (posX, posY) {
    const entity = new Entity(posX, posY)
    const sprite = createSprite('base', posX, posY, Math.random() > 0.5 ? textureMap.red : textureMap.green)
    entity.sprites.push(sprite)
    this.entities.push(entity)
    return entity
}

function createSprite(name, posX, posY, texture) {
    return new Sprite({ x: posX, y: posY }, texture)
}


Scene.prototype.drawSprites = function (data, width, height) {
    for (let i = this.entities.length - 1; i >= 0; --i) {
        const sprites = this.entities[i].sprites

        for (let sp = sprites.length - 1; sp >= 0; --sp) {
            const sprite = sprites[sp]
            const texHeight = sprite.texture.height
            const centerX = sprite.center.x
            const centerY = sprite.center.y
            let col = 0, row = 0, x = 0, y = 0
            const len = sprite.texture.pixels.length
            const pixels = sprite.texture.pixels

            for (let j = len - 1; j >= 0; --j) {
                x = Math.floor(centerX + row)
                y = centerY + col

                if (x >= 0 && x < width && y >= 0 && y < height)
                    data[x + Math.floor(y * width)] = pixels[j]

                if (col + 1 == texHeight) {
                    col = 0
                    row++
                } else {
                    col++
                }
            }
        }
    }
}


/*


    add() { }

    makeParent() { }

    remove() { }

    getEntity(id) { }

    getEntites(...ids) { }
*/