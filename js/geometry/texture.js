import {Pixel} from './pixel.js'

export class Texture {
    constructor(x, y, color) {
        this.pixels = [];
        this.dimensions = { width: x, height:y };
        this.createProcedural();
    }
    createProcedural() {
        let x = 0, y =0;
        let size = this.dimensions.width * this.dimensions.height;
        let i = 0;

        for (i = 0; i < size; i++)
        {    
            let color = Math.ceil(3 * Math.random());        
            this.pixels.push(new Pixel(x, y, color));

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