import * as geo from '../geometry/geometry.js'
import {Sprite} from '../geometry/sprite.js'
import {centerTriangleTo} from '../geometry/triangle.js' 
import {Renderer} from './renderer.js'
import {Viewport} from './viewport.js'

let renderer = new Renderer();
let viewport = new Viewport();
var angle = 0.0;
var lastRenderTime = 0.0;
var deltaTime = 0.01;
var triangleRotationSpeed = 0.001;
var geometry = new geo.Geometry();
var sprites = [];

export function init(width, height, intervalMilliSeconds) {
    let canvas = document.getElementById("canvas");
    let xOffset = canvas.offsetLeft;
    let yOffset = canvas.offsetTop;
    let xOffsetWidth = canvas.offsetWidth;
    let yOffsetHeight = canvas.offsetHeight;
    let xOffsetWindow = window.pageXOffset;
    let yOffsetWindow = window.pageYOffset;

    viewport.init(xOffset, yOffset, xOffsetWidth, yOffsetHeight, xOffsetWindow, yOffsetWindow, width, height);

    document.onmousemove = (event) => {        
        for (let i  = sprites.length - 1; i >= 0; --i) {            
            if (Math.abs(sprites[i].center.x - viewport.cursorU) < 10) {
                sprites[i].color += 5;
            }                
        }
        viewport.cursorUpdate(event);
    }
    renderer.init(canvas);
 
    startLoop(intervalMilliSeconds);
}

function startLoop (intervalMilliSeconds) { 
    let canvas = document.getElementById("canvas");
    canvas.onmousedown = onMouseDown;
    setInterval(draw, intervalMilliSeconds);
}

function updateDeltaTime() {
    var now = Date.now();
    deltaTime = now - lastRenderTime;
    lastRenderTime = now;
}

function draw () {
    updateDeltaTime ();
    renderer.draw(createData());
}

function onMouseDown () {
    centerTriangleTo(geo.addTriangleToGeometry(geometry), viewport.cursorU, viewport.cursorV); // Add triangle
    sprites.push(new Sprite({x: viewport.cursorU,y: viewport.cursorV}, 100, 50));
}

function createData () {
    const width = viewport.width;
    const height = viewport.height;
    const cursorU = viewport.cursorU;
    const cursorV = viewport.cursorV;

    var data = createTexture(width, height, 125);
    drawLine2D(11, 0, 0, cursorU, cursorV, data, width);
    drawLine2D(11, width - 1, height - 1, cursorU, cursorV, data, width);
    drawLine2D(11, 0, height - 1, cursorU, cursorV, data, width);
    drawLine2D(11, width - 1, 0, cursorU, cursorV, data, width);

    // Draw sprites
    for (i = sprites.length - 1; i >= 0; --i) {
        sprites[i].center.x += 1;        
        sprites[i].draw(data, width);
        if (sprites[i].center.x > width)
            sprites[i].center.x = 0;
    }

    // Draw geometry
    angle = triangleRotationSpeed * deltaTime;
    var geometries = geometry.shapes;
    var i;
    for (i = geometries.length - 1; i >= 0; --i) {
        rotateTriangle(geometries[i], angle);
        drawTriangle2D(geometries[i], data, width);
    }

    return data;
}

function createTexture (width, height, colors) {
    return new Array(width * height).fill(colors);
}