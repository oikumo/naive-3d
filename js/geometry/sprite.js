class Pixel {
    constructor (x,y,color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

export class Sprite {
    constructor (center, x, y) {
        this.color = 0;
        this.points = [];
        this.center = center;
        this.dimensions = { width: x, height:y };
        this.create();
    } 
    create() {
        let x = 0, y =0;
        let size = this.dimensions.width * this.dimensions.height;
        let i = 0;

        for (i = 0; i < size; i++)
        {    
            this.points.push(new Pixel(x, y, i % 2 == 0 ? 100 : 255));

            if (x == this.dimensions.width) {
                x = 0;
                y++;
            }
            else {
                x++;
            }            
        }
    }
    draw(data, w) {
        let i = 0;
        let point;
        for (i = this.points.length - 1; i >= 0; --i) {
            point = this.points[i];
            data[this.center.x + point.y + (this.center.y + point.x) * w] = point.color + this.color;
        }
    }
}