export class UniformFiller {
    constructor(pallete) {
        this.pallete = pallete
    }
    getColor() {
        return this.pallete.color[Math.floor(Math.random() * 5)]
    }
}