export class Time {
    constructor() {
        this.lastRenderTime = 0.0
        this.elapsed = 0.0
        this.deltaTime = 0.01
        this.framesCounter = 0
        this.fps = 0
    }    
    start() {
        this.lastRenderTime = Date.now()
    }
    update() {        
        const now = Date.now()
        this.deltaTime = now - this.lastRenderTime
        this.lastRenderTime = now

        this.framesCounter++
        this.elapsed += this.deltaTime
        if (this.elapsed >= 1000)
        {
            this.fps = this.framesCounter
            this.elapsed = 0
            this.framesCounter = 0
        }
    }
}