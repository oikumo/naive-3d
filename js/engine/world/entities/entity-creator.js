import { Pallete } from "../../rendering/colors/pallete.js"
import { TextureFactory } from "../../rendering/textures/textureFactory.js"
import { Entity } from "../entity.js"
import { Sprite } from "../../rendering/geometry/sprite.js"

const pallete = new Pallete()
const textureRed = new TextureFactory(200, 200).checker(pallete.color[0], pallete.color[4], 10, 10)
const textureGreen = new TextureFactory(200, 200).checker(pallete.color[4], pallete.color[2], 10, 10)

const textureMap = {
    red: textureRed,
    green: textureGreen
}

const createEntity = (posX, posY) => {
    const sprite = new Sprite({ x: posX, y: posY }, Math.random() > 0.5 ? textureMap.red : textureMap.green)
    const sprites = []
    sprites.push(sprite)
    return new Entity(posX, posY, sprites)
}

export default {
    createEntity: createEntity
}
