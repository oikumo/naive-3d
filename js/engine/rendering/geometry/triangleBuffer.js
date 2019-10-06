export class TriangleBuffer {
    constructor () {
        this.triangles = new ArrayBuffer(1024);
        this.colors = new Uint32Array(128);
        this.len = 0;
    }
    add(x, y, color) {
        if ((this.len + 2) * 8 == this.triangles.length)
            return
        const index = this.len * 8;
        const ax = 20
        const ay = 20
        const bx = 70
        const by = 20
        const cx = 45
        const cy = 70
        const centerX = 45
        const centerY = 45
        const deltaX = x - centerX
        const deltaY = y - centerY
        this.triangles[index]     = ax + deltaX
        this.triangles[index + 1] = ay + deltaY
        this.triangles[index + 2] = bx + deltaX
        this.triangles[index + 3] = by + deltaY
        this.triangles[index + 4] = cx + deltaX
        this.triangles[index + 5] = cy + deltaY
        this.triangles[index + 6] = x
        this.triangles[index + 7] = y
        this.colors[this.len] = color;
        this.len++;
    }
}