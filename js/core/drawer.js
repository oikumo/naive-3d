import {Sprite, Texture} from '../geometry/texture.js'

export class Drawer {    
    constructor() {
        let tex1 = new Texture(100,100, 255);
        let tex2 = new Texture(100,100, 255);
        this.sprite1 = new Sprite({x: 0,y: 0}, tex1);
        this.sprite2 = new Sprite({x: 0,y: 0}, tex2);        
    }
    update (viewport, geometry, sprites, deltaTime, speed, angle) {        
        const width = viewport.width;
        const height = viewport.height;
        const cursorU = viewport.cursorU;
        const cursorV = viewport.cursorV; 

        if (this.texture === undefined) {
            this.texture = new Array(width * height);
        }
        this.texture.fill(0);
        
        this.drawLine2D(255, 0, 0, cursorU, cursorV, this.texture, width);
        this.drawLine2D(255, width - 1, height - 1, cursorU, cursorV, this.texture, width);
        this.drawLine2D(255, 0, height - 1, cursorU, cursorV, this.texture, width);
        this.drawLine2D(255, width - 1, 0, cursorU, cursorV, this.texture, width);
        
        let i;
        // Draw sprites
        this.drawSprite(viewport, this.sprite1, 0);
        this.drawSprite(viewport, this.sprite2, 20);    
                
        for (i = sprites.length - 1; i >= 0; --i) {
            sprites[i].center.x += 1;     
            sprites[i].draw(this.texture, width);
            if (sprites[i].center.x > width)
                sprites[i].center.x = 0;
        }

        // Draw geometry
        angle = speed * deltaTime;
        let geometries = geometry.shapes;
        for (i = geometries.length - 1; i >= 0; --i) {
            rotateTriangle(geometries[i], angle);
            this.drawTriangle2D(geometries[i], this.texture, width);
        }     
    }
    drawSprite(viewport, sprite, offset) {
        const width = viewport.width;
        const height = viewport.height;
        const cursorU = viewport.cursorU;
        const cursorV = viewport.cursorV; 
        let i = 0;
        //for (i = 10 - 1; i >= 0; --i) {
            sprite.center.x = cursorU + i * offset;
            sprite.center.y = cursorV - i*i + offset;            
            sprite.draw(this.texture, width);
            if (sprite.center.x > width)
                sprite.center.x = 0;
        //}
    }
    drawLine2D (color, _p1, _p2, _q1, _q2, data, width) {
        var p1 = Math.ceil(_p1);
        var p2 = Math.ceil(_p2);
        var deltaQ1P1 = Math.ceil(_q1) - p1;
        var deltaQ2P2 = Math.ceil(_q2) - p2;
        var n = Math.floor(Math.sqrt(Math.pow(deltaQ1P1, 2) + Math.pow(deltaQ2P2, 2)));
        
        var i, x, t, y;
        for (i = 0; i < n; i++) {
            t = i / n;
            x = Math.floor(p1 + (t * deltaQ1P1));
            if (x < 0 || x >= width) 
                continue;
    
            y = p2 + Math.floor(t * deltaQ2P2);
            data[(y * width) + x] = color;
        }
    }
    drawTriangle2D (triangle, data, dataLineWidth) {
        var p1 = triangle.a;
        var p2 = triangle.b;
        var p3 = triangle.c;
        var color = triangle.color;
    
        this.drawLine2D(color, p1.x, p1.y, p2.x, p2.y, data, dataLineWidth);
        this.drawLine2D(color, p2.x, p2.y, p3.x, p3.y, data, dataLineWidth);
        this.drawLine2D(color, p3.x, p3.y, p1.x, p1.y, data, dataLineWidth);
    }
}