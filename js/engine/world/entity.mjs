export function Entity(x, y, dimWidth, dimHeight) {
    this.center = {
        x: x,
        y: y
    }
    this.dim = {
        width: dimWidth,
        height: dimHeight
    }
}