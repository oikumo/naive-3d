import {rotateTriangle} from '../transform/transform.js'
import {drawLine2D} from '../rendering/brush.js'

export class Drawer {    
    constructor(viewport, scene) {
        this.width = viewport.width;
        this.height = viewport.height;
        this.viewport = viewport;
        this.scene = scene;
        this.texture = new Uint8Array(this.width * this.height);
    }
    update (deltaTime, speed) {         
        this.texture.fill(0);
        this.cursorU = this.viewport.cursorU;
        this.cursorV = this.viewport.cursorV; 
        this.drawAim();
        this.drawSprites(this.scene.sprites);
        this.drawShapes(this.scene.shapes, speed * deltaTime);
    }
    drawAim() {
        drawLine2D(1, 0, 0, this.cursorU, this.cursorV, this.texture, this.width);
        drawLine2D(1, this.width - 1, this.height - 1, this.cursorU, this.cursorV, this.texture, this.width);
        drawLine2D(1, 0, this.height - 1, this.cursorU, this.cursorV, this.texture, this.width);
        drawLine2D(1, this.width - 1, 0, this.cursorU, this.cursorV, this.texture, this.width);
    }    
    drawSprites(sprites) {
        let i;    
        for (i = sprites.length - 1; i >= 0; --i) {
            sprites[i].center.x += 1;     
            sprites[i].draw(this.texture, this.width);
            if (sprites[i].center.x > this.width)
                sprites[i].center.x = 0;
        }
    }
    drawShapes(shapes, angle) {
        let i;      
        for (i = shapes.length - 1; i >= 0; --i) {
            rotateTriangle(shapes[i], angle);
            this.drawTriangle2D(shapes[i], this.texture, this.width);
        }   
    }
    drawSprite(sprite, offset) {
        sprite.center.x = this.cursorU + i * offset;
        sprite.center.y =this.cursorV - i*i + offset;            
        sprite.draw(this.texture, this.width);
        if (sprite.center.x > this.width)
            sprite.center.x = 0;
    }
    drawTriangle2D (triangle, data, dataLineWidth) {
        const p1 = triangle.a;
        const p2 = triangle.b;
        const p3 = triangle.c;
        const color = triangle.color;
    
        drawLine2D(color, p1.x, p1.y, p2.x, p2.y, data, dataLineWidth);
        drawLine2D(color, p2.x, p2.y, p3.x, p3.y, data, dataLineWidth);
        drawLine2D(color, p3.x, p3.y, p1.x, p1.y, data, dataLineWidth);
    }
}