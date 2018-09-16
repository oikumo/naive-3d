class Pixel {
    constructor (x,y,color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

export class Texture {
    constructor(x, y, color) {
        this.pixels = [];
        this.dimensions = { width: x, height:y };
        this.color = color;
        this.create();
    }
    create() {
        let x = 0, y =0;
        let size = this.dimensions.width * this.dimensions.height;
        let i = 0;

        for (i = 0; i < size; i++)
        {    
            this.pixels.push(new Pixel(x, y, this.color));

            if (x == this.dimensions.width) {
                x = 0;
                y++;
            }
            else {
                x++;
            }            
        }
    }
}

export class Sprite {
    constructor (center, texture) {
        this.texture = texture;
        this.center = center;
        this.color = 1;
    }
    draw(data, w) {
        let i = 0;
        let pixel;
        let position;
        let length = this.texture.pixels.length;
        
        for (i = 0; i < length; i++) {
            pixel = this.texture.pixels[i];            
            position = this.center.x + pixel.y  + (this.center.y + pixel.x) * w;            
            data[position] = pixel.color * this.color;
        }
    }
}