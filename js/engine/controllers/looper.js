const runner = (renderer, world, drawer) => {
    drawer(renderer(world))
}

function createHtmlCanvasTexture() {
    const image = canvas.getContext("2d").createImageData(canvas.width, canvas.height)
    return new Uint32Array(new Uint8ClampedArray(new ArrayBuffer(image.data.length)))
}

const canvasTexture = (canvas, texture) => {
    return () => {

    }
}

const c = canvas.getContext("2d").createImageData(canvas.width, canvas.height)
const x = canvasTexture(c, )

function putImage(image) {

}

export function tick(world, renderer) {

}

export function looper(interval) {
    this.interval = interval
}

looper.prototype.tick = function (renderer) {

}

