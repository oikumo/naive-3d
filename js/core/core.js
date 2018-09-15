import * as geo from '../geometry/geometry.js'
import {Sprite} from '../geometry/sprite.js'
import {centerTriangleTo} from '../geometry/triangle.js' 
import {Renderer} from './renderer.js'
import {Viewport} from './viewport.js'
import {Drawer} from './drawer.js'
import {Screen} from './screen.js'

export class Core
{
    constructor(width, height, intervalMilliSeconds) {
        this.width = width;
        this.height = height;
        this.intervalMilliSeconds = intervalMilliSeconds;
        
        this.renderer = new Renderer();
        this.viewport = new Viewport(new Screen(), this.width, this.height);
        this.drawer = new Drawer();
        this.geometry = new geo.Geometry();
        this.sprites = [];

        this.angle = 0.0;
        this.lastRenderTime = 0.0;
        this.elapsed = 0.0;
        this.deltaTime = 0.01;
        this.framesCounter = 0;
        this.fps = 0;
        this.triangleRotationSpeed = 0.001;
    }
    init() {
        document.onmousemove = (event) => this.onMouseMove(event);
        this.renderer.init(canvas);
        this.startLoop();
    }
    startLoop () { 
        let canvas = document.getElementById("canvas");
        canvas.onmousedown = ()=> this.onMouseDown();
        this.lastRenderTime = Date.now();
        setInterval(()=>this.draw(), this.intervalMilliSeconds);
    }
    draw () {
        this.updateDeltaTime ();
        this.drawer.update(this.viewport, this.geometry, this.sprites, this.deltaTime, this.triangleRotationSpeed, this.angle);
        this.renderer.draw(this.drawer.texture);
    }
    updateDeltaTime() {        
        let now = Date.now();
        this.deltaTime = now - this.lastRenderTime;
        this.lastRenderTime = now;

        this.framesCounter++;
        this.elapsed += this.deltaTime;
        if (this.elapsed >= 1000)
        {
            this.fps = this.framesCounter;
            this.elapsed = 0;
            this.framesCounter = 0;
        }
        console.log("fps: " + this.fps);
    }
    onMouseMove(event) {        
        for (let i  = this.sprites.length - 1; i >= 0; --i) {            
            if (Math.abs(this.sprites[i].center.x - this.viewport.cursorU) < 10) {
                this.sprites[i].color += 5;
            }                
        }
        this.viewport.cursorUpdate(event);
    }
    onMouseDown () {    
        centerTriangleTo(geo.addTriangleToGeometry(this.geometry), this.viewport.cursorU, this.viewport.cursorV);
        this.sprites.push(new Sprite({x: this.viewport.cursorU,y: this.viewport.cursorV}, 100, 50));    
    }
}