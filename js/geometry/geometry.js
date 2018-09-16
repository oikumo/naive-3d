import {Triangle} from './triangle.js'

export class Geometry {
    constructor () {    
        this.shapes = [];
    }
}

export function addTriangleToGeometry (geometry) {
    var triangle = new Triangle();
    triangle.a = {x:20, y:20}
    triangle.b = {x:70, y:20}
    triangle.c = {x:45, y:70}
    triangle.center = {x:45, y:45}
    triangle.color = 100;
    geometry.shapes.push(triangle);
    return triangle;
}