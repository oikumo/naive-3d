import {Renderer} from './renderer.js'
import {Viewport} from './viewport.js'
import {Drawer} from './drawer.js'
import {Screen} from './screen.js'
import {Input} from '../input/input.js'
import {Time} from './time.js';
import {Scene} from '../scene/scene.js'

export class Core
{
    constructor() {
        let canvas = document.getElementById("canvas")
        this.width = canvas.width
        this.height = canvas.height
        this.intervalMilliSeconds = 5
        this.triangleRotationSpeed = 0.001

        this.time = new Time()
        this.scene = new Scene()
        this.renderer = new Renderer(this.width, this.height)
        
        this.viewport = new Viewport(new Screen(), this.width, this.height)
        this.drawer = new Drawer(this.viewport, this.scene, this.renderer)
        this.input = new Input(this.viewport, this.scene)
    }
    init() {    
        this.time.start()
        this.startLoop()        
    }
    startLoop () { 
        setInterval(this.draw.bind(this), this.intervalMilliSeconds)
    }
    draw () {
        this.time.update()
        this.drawer.update(this.time.deltaTime, this.triangleRotationSpeed)
        this.renderer.draw()
    }
}