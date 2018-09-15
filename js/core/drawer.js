export class Drawer {

    update (viewport, geometry, sprites, deltaTime, speed, angle) {        
        const width = viewport.width;
        const height = viewport.height;
        const cursorU = viewport.cursorU;
        const cursorV = viewport.cursorV; 
        if (this.texture === undefined) {
            this.texture = new Array(width * height);
            this.texture.fill(125);
        } else {
            this.texture.fill(125);
        }

        drawLine2D(11, 0, 0, cursorU, cursorV, this.texture, width);
        drawLine2D(11, width - 1, height - 1, cursorU, cursorV, this.texture, width);
        drawLine2D(11, 0, height - 1, cursorU, cursorV, this.texture, width);
        drawLine2D(11, width - 1, 0, cursorU, cursorV, this.texture, width);
    
        let i;
        // Draw sprites
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
            drawTriangle2D(geometries[i], this.texture, width);
        }
    }
}