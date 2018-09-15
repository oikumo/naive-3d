import * as geo from '../geometry/geometry.js'
import {Sprite} from '../geometry/sprite.js'
import {centerTriangleTo} from '../geometry/triangle.js' 
import {Renderer} from './renderer.js'
import {Viewport} from './viewport.js'
import {Drawer} from './drawer.js'

let renderer = new Renderer();
let viewport = new Viewport();
let drawer = new Drawer();
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
    drawer.update(viewport, geometry, sprites, deltaTime, triangleRotationSpeed, angle);
    renderer.draw(drawer.texture);
}

function onMouseDown () {
    centerTriangleTo(geo.addTriangleToGeometry(geometry), viewport.cursorU, viewport.cursorV); // Add triangle
    sprites.push(new Sprite({x: viewport.cursorU,y: viewport.cursorV}, 100, 50));
}