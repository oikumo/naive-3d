import {Core} from '../core/core.js'
import {Renderer} from './renderer.js'
import {Viewport} from './viewport.js'
import {Drawer} from './drawer.js'
import {Screen} from './screen.js'
import {Input} from './input/input.js'
import {Scene} from '../scene/scene.js'
import {create} from './actions/sprites.js'

export class App {
    init() {
        const canvas = document.getElementById("canvas")
        const renderer = new Renderer()
        this.scene = new Scene()        
        
        const screen = new Screen(canvas)
        this.viewport = new Viewport(screen, canvas.width, canvas.height)

        const input = new Input(this.viewport, this.onMouseDown.bind(this))
        const drawer = new Drawer(this.viewport, this.scene, renderer)

        this.core = new Core(drawer, renderer)
        this.core.start()
    }
    onMouseDown() {
        const x = this.viewport.cursorU
        const y = this.viewport.cursorV
        this.scene.addEntity(x, y, 444444444)
        this.scene.addSprite(create(x, y))
    }
}