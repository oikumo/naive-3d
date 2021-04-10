export class HtmlCanvasInput {
    constructor(canvas) {
        this.canvas = canvas;
        this.screenInput = null;
        this.rect = null;
    }

    update() {
        this.rect = this.canvas.getBoundingClientRect();
    }

    register(screenInput) {
        this.screenInput = screenInput;
        this.update();

        this.canvas.onmousemove = (e) => {
            this.screenInput.onMove(e.clientX - this.rect.left, e.clientY - this.rect.top);
        };

        this.canvas.onmouseup = (e) => {
            this.screenInput.onActionUp(e.clientX - this.rect.left, e.clientY - this.rect.top);
        };

        this.canvas.onmousedown = (e) => {
            this.screenInput.onActionDown(e.clientX - this.rect.left, e.clientY - this.rect.top);
        };

        this.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        };
    }
}

export function a() { }