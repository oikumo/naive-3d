import { Color } from "../core/colors/color.js";
import { Texture } from "../core/textures/texture.js";
import { Entity } from "./entity.js";

export class Scene {
    constructor() {
        this.id = 0;
        this.entities = new Set();
        this.tex = new Texture(320, 320);
        this.texCenter = { x: this.tex.width / 2, y: this.tex.height / 2 };
        this.tex.fill(() => parseInt(0xFFff4405));

        this.tex2 = new Texture(120, 120);
        this.texCenter2 = { x: this.tex.width / 2, y: this.tex.height / 2 };
        this.tex2.fill(() => Color.yellow);
    }

    draw(renderer, deltaSeconds) {
        const textureWidth = renderer.width; 
        this.tex.paintTo(renderer.tex, textureWidth, this.texCenter.x, this.texCenter.y);
        this.tex2.paintTo(renderer.tex, textureWidth, this.texCenter2.x, this.texCenter2.y);
    }

    addEntity(entity) {
        if (!(entity instanceof Entity)) {
            return null;
        }

        this.entities.add(entity);
        return entity;
    }
}