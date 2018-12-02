import {Core} from '../core/core.js'
import {DeltaTime} from '../core/time.js'

export class App {
    init(interval = 5) {                
        const canvas = document.getElementById("canvas")    
        this.width = canvas.width
        this.height = canvas.height        
        this.core = new Core()
        
        canvas.onmousedown = (e) => {
            this.core.addTriangle(e.x,e.y)
            this.core.addCube()
            this.core.addSprite(e.x, e.y)
            this.core.createCube()
            this.code.createQuad()
        }
        this.deltaTime = new DeltaTime()

        clearInterval(this.loop)

        this.loop = setInterval(() => {
            this.core.draw(this.width, this.height, this.deltaTime.get())
        }, interval)
    }
    pause() {
        clearInterval(this.loop)
    }
}