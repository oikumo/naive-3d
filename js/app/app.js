import {Core} from '../core/core.js'
import {Renderer} from './renderer.js'
import {Viewport} from './viewport.js'
import {Screen} from './screen.js'
import {Input} from './input/input.js'
import {Scene} from '../scene/scene.js'
import {create} from './actions/sprites.js'
import {Time} from './time.js'

export class App {
    init() {
        this.intervalMilliSeconds = 5
        this.time = new Time()
        const canvas = document.getElementById("canvas")
        const renderer = new Renderer()
        
        const screen = new Screen(canvas)
        this.viewport = new Viewport(screen, canvas.width, canvas.height)

        new Input(this.viewport, this.onMouseDown.bind(this))

        this.core = new Core(this.viewport, this.scene, renderer)
        this.scene = new Scene(this.core)
        this.start()
    }
    start() {    
        this.time.start()
        this.startLoop()        
    }
    pause() {
        clearInterval(this.loop)
    }
    startLoop () { 
        this.loop = setInterval(this.update.bind(this), this.intervalMilliSeconds)
    }
    update() {
        this.time.update()
        this.core.draw(this.time.deltaTime)
    }
    onMouseDown() {
        const x = this.viewport.cursorU
        const y = this.viewport.cursorV
        this.scene.addEntity(x, y, 444444444)
        this.scene.addSprite(create(x, y))
    }
}