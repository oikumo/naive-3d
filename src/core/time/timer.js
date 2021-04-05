export class Timer {
    constructor() {
        this.delta = 0;
        this.lastStepTime = 0;
    }

    start() {
        this.delta = 0;
        this.lastStepTime = Date.now();
    }

    step() {
        const now = Date.now();
        this.delta = now - this.lastStepTime;
        this.lastStepTime = now;
    }

    deltaSeconds() {
        return this.delta / 1000.0;
    }
}