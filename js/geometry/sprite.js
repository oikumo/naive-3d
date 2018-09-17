export class Sprite {
    constructor (center, texture) {
        this.texture = texture;
        this.center = center;
    }
    draw(data, w) {
        let i = 0;
        let pixel;
        let position;
        let length = this.texture.pixels.length;
        
        for (i = 0; i < length; i++) {
            pixel = this.texture.pixels[i];            
            position = this.center.x + pixel.y  + (this.center.y + pixel.x) * w;            
            data[position] = pixel.color;
        }
    }
}