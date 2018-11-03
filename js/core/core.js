import {Time} from './time.js'

export class Core
{
    constructor(drawer, renderer) {
        this.drawer = drawer
        this.renderer = renderer
        this.intervalMilliSeconds = 5
        this.triangleRotationSpeed = 0.001
        this.time = new Time()
    }
    start() {    
        this.time.start()
        this.startLoop()        
    }
    pause() {
        clearInterval(this.loop)
    }
    startLoop () { 
        this.loop = setInterval(this.draw.bind(this), this.intervalMilliSeconds)
    }
    draw () {
        this.time.update()
        this.drawer.update(this.time.deltaTime, this.triangleRotationSpeed)
        this.renderer.draw()
    }
}